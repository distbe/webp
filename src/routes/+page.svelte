<script lang="ts">
  import Card from '$components/Card.svelte';
  import CardEmpty from '$components/CardEmpty.svelte';
  import InputNumber from '$components/InputNumber.svelte';
  import InputGroup from '$components/InputGroup.svelte';
  import { loadVips } from '$lib/utils/vips';
  import { download } from '$lib/utils/blob';
  import InputKnob from '$components/InputKnob.svelte';

  $: isDragging = false;

  let inputQuality = 100;

  let onSize = false;
  let inputWidth: number | null = null;
  let inputHeight: number | null = null;

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

    const vips = await loadVips();

    for (const file of files) {
      let im = vips.Image.newFromBuffer(await file.arrayBuffer(), file.name);
      if (onSize && (inputWidth || inputHeight)) {
        const originWidth = im.width;
        const originHeight = im.height;
        im = im.resize(0.5, {});
        // im = im.crop
      }

      const quality = ~~inputQuality; // to int
      console.log('quality', quality);
      const buffer = await im.writeToBuffer(`.webp[Q=${quality}]`);

      if (files.length === 1) {
        const blob = new Blob([buffer], { type: 'image/webp' });
        const filename = file.name.replace(/\.[^/.]+$/, '') + '.webp';
        download(blob, filename);
      }
    }
  }
</script>

<svelte:body on:dragenter|preventDefault|stopPropagation={onDragEnter} />

<div class="flex flex-col h-fit">
  <section>
    <div class="container mx-auto px-4">
      <div class="flex gap-8 items-center justify-center">
        <Card title="Quality" on={true} disabled>
          <InputGroup label="Quality">
            <div class="space-y-4">
              <InputNumber bind:value={inputQuality} max={100} min={0} />
              <div class="w-28 mx-auto">
                <InputKnob bind:value={inputQuality} max={100} min={0} />
              </div>
            </div>
          </InputGroup>
        </Card>
        <Card title="Size" bind:on={onSize}>
          <div class="space-y-2">
            <InputGroup label="Width">
              <InputNumber bind:value={inputWidth} min={0} />
            </InputGroup>
            <InputGroup label="Height">
              <InputNumber bind:value={inputHeight} min={0} />
            </InputGroup>
          </div>
        </Card>
        <Card title="Scale" bind:on={onSize}>
          <div class="space-y-2">
            <InputGroup label="Scale">
              <InputNumber bind:value={inputWidth} min={0} />
            </InputGroup>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section class="flex-1">
    <div class="container mx-auto px-4 h-full border border-white">Drop</div>
  </section>
</div>
{#if isDragging}
  <div
    class="fixed inset-0 border-4 border-blue-400 flex items-center justify-center bg-black bg-opacity-50"
    on:dragover|preventDefault|stopPropagation
    on:dragleave|preventDefault|stopPropagation={onDragLeave}
    on:drop|preventDefault|stopPropagation={onDrop}
  />
{/if}
