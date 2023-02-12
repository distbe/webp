<script lang="ts">
  import Card from '$components/Card.svelte';
  import InputGroup from '$components/InputGroup.svelte';
  import InputKnob from '$components/InputKnob.svelte';
  import InputNumber from '$components/InputNumber.svelte';
  import InputSelect from '$components/InputSelect.svelte';
  import { download } from '$lib/utils/blob';
  import { loadVips, resize, type Fit } from '$lib/utils/vips';

  $: isDragging = false;

  let inputQuality = 100;

  let onSize = false;
  let inputWidth: number | null = null;
  let inputHeight: number | null = null;
  let inputFit: Fit = 'Cover';
  let progress: number | null = null;

  let onScale = false;
  let inputScale: number = 1;

  function toggledOnSize(onSize: boolean) {
    if (onSize && onScale) {
      onScale = false;
    }
  }

  function toggledOnScale(onScale: boolean) {
    if (onScale && onSize) {
      onSize = false;
    }
  }

  $: toggledOnSize(onSize);
  $: toggledOnScale(onScale);

  function onDragEnter(e: DragEvent) {
    isDragging = true;
  }
  function onDragLeave(e: DragEvent) {
    isDragging = false;
  }
  async function onDrop(e: DragEvent) {
    isDragging = false;
    const files = [...(e.dataTransfer?.files ?? [])];
    if (files.length === 0) {
      return;
    }

    progress = 0;
    const vips = await loadVips();

    const zip = files.length > 1 ? await import('jszip').then((m) => new m.default()) : null;
    const filenames = new Set<string>();

    for (const [fileIndex, file] of files.entries()) {
      progress = fileIndex / files.length;
      let im = vips.Image.newFromBuffer(await file.arrayBuffer(), file.name);
      if (onSize && (inputWidth || inputHeight)) {
        im = resize(vips, im, [inputWidth ?? 0, inputHeight ?? 0], inputFit);
      } else if (onScale && inputScale) {
        im = im.resize(inputScale, {});
      }

      const quality = ~~inputQuality; // to int
      const buffer = await im.writeToBuffer(`.webp[Q=${quality}]`);

      const blob = new Blob([buffer], { type: 'image/webp' });
      const filename = file.name.replace(/\.[^/.]+$/, '');

      if (files.length === 1) {
        download(blob, `${filename}.webp`);
        progress = 1;
        return;
      } else {
        let newFilename = filename;
        let i = 1;
        while (filenames.has(newFilename)) {
          newFilename = `${filename} (${i})`;
          i++;
        }
        zip!.file(`${newFilename}.webp`, blob);
      }
    }

    if (zip) {
      const blob = await zip.generateAsync({ type: 'blob' });
      download(blob, 'images.zip');
    }
    progress = 1;
  }
</script>

<svelte:body on:dragenter|preventDefault|stopPropagation={onDragEnter} />

<div class="flex flex-col h-full gap-y-6">
  <section>
    <div class="container mx-auto px-4">
      <div class="flex gap-8 items-center justify-center">
        <Card title="Quality" on={true} disabled>
          <InputGroup label="Quality">
            <div class="space-y-4">
              <InputNumber bind:value={inputQuality} max={100} min={0} step={1} />
              <div class="w-28 mx-auto">
                <InputKnob bind:value={inputQuality} max={100} min={0} />
              </div>
            </div>
          </InputGroup>
        </Card>
        <Card title="Size" bind:on={onSize}>
          <div class="space-y-2">
            <InputGroup label="Width">
              <InputNumber bind:value={inputWidth} min={0} step={1} />
            </InputGroup>
            <InputGroup label="Height">
              <InputNumber bind:value={inputHeight} min={0} step={1} />
            </InputGroup>
            <InputGroup label="Fit">
              <InputSelect
                options={['Contain', 'Cover', 'Fill', 'Inside', 'Outside']}
                bind:value={inputFit}
              />
            </InputGroup>
          </div>
        </Card>
        <Card title="Scale" bind:on={onScale}>
          <div class="space-y-2">
            <InputGroup label="Scale">
              <InputNumber bind:value={inputScale} min={0} />
            </InputGroup>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section class="flex-1 flex items-center justify-center">
    <div
      class="p-8 rounded-2xl border border-dashed border-white border-opacity-50 text-white dropzone"
    >
      Drop Your Image Files!
    </div>
  </section>
</div>
{#if isDragging}
  <div
    class="fixed inset-0 border-4 border-blue flex items-center justify-center bg-black bg-opacity-50"
    on:dragover|preventDefault|stopPropagation
    on:dragleave|preventDefault|stopPropagation={onDragLeave}
    on:drop|preventDefault|stopPropagation={onDrop}
  />
{/if}

<style>
  .dropzone {
    box-shadow: 0 0 75vmin rgba(255, 255, 255, 0.75);
  }
</style>
