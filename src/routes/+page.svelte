<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';

  import Result from '$components/Result.svelte';
  import Card from '$components/Card.svelte';
  import InputGroup from '$components/InputGroup.svelte';
  import InputKnob from '$components/InputKnob.svelte';
  import InputNumber from '$components/InputNumber.svelte';
  import InputSelect from '$components/InputSelect.svelte';
  import { download } from '$lib/utils/blob';
  import { loadVips, resize, type Fit } from '$lib/utils/vips';

  let mounted = false;
  let isDragging = false;

  let loading = false;
  let progress = tweened(0);
  let results: [filename: string, beforeSize: number, afterSize: number][] | null = null;

  let inputQuality = 100;

  let onSize = false;
  let inputWidth: number | null = null;
  let inputHeight: number | null = null;
  let inputFit: Fit = 'Cover';

  $: toggledOnSize(onSize);
  $: onInputSize(inputWidth, inputHeight);

  let onScale = false;
  let inputScale: number = 1;

  $: toggledOnScale(onScale);
  $: onInputScale(inputScale);

  onMount(() => {
    mounted = true;
  });

  function toggledOnSize(onSize: boolean) {
    if (!mounted) return;
    if (onSize && onScale) {
      onScale = false;
    }
  }

  function toggledOnScale(onScale: boolean) {
    if (!mounted) return;
    if (onScale && onSize) {
      onSize = false;
    }
  }

  function onInputSize(width: number | null, height: number | null) {
    if (!mounted) return;
    if ((width || height) && !onSize) {
      onSize = true;
      toggledOnSize(onSize);
    }
  }

  function onInputScale(scale: number | null) {
    if (!mounted) return;
    if (scale && !onScale) {
      onScale = true;
      toggledOnScale(onScale);
    }
  }

  function onDragEnter(e: DragEvent) {
    isDragging = true;
  }

  function onDragLeave(e: DragEvent) {
    isDragging = false;
  }

  async function onClickUpload() {
    const fileDialog = await import('file-dialog').then((m) => m.default);
    const files = await fileDialog({ accept: 'image/*', multiple: true });
    await transform([...files]);
  }

  async function onDrop(e: DragEvent) {
    isDragging = false;
    await transform([...(e.dataTransfer?.files ?? [])]);
  }

  async function transform(files: File[]) {
    if (files.length === 0) {
      return;
    }

    loading = true;
    progress.set(0);
    const vips = await loadVips();

    const zip = files.length > 1 ? await import('jszip').then((m) => new m.default()) : null;
    const filenames = new Set<string>();

    const nextResults: [filename: string, beforeSize: number, afterSize: number][] = [];
    for (const [fileIndex, file] of files.entries()) {
      progress.set(fileIndex / files.length);
      let im = vips.Image.newFromBuffer(await file.arrayBuffer(), file.name);
      if (onSize && (inputWidth || inputHeight)) {
        im = resize(vips, im, [inputWidth ?? 0, inputHeight ?? 0], inputFit);
      } else if (onScale && inputScale) {
        im = im.resize(inputScale, {});
      }
      const buffer = await im.writeToBuffer('.webp', {
        Q: ~~inputQuality // to int
      });

      const blob = new Blob([buffer], { type: 'image/webp' });
      const filename = file.name.replace(/\.[^/.]+$/, '');

      nextResults.push([file.name, file.size, blob.size]);

      if (files.length === 1) {
        done();
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
    done();

    function done() {
      loading = false;
      progress.set(1);
      results = nextResults;
    }
  }
</script>

<svelte:head>
  <title>WebP converter by dist.be</title>
  <meta
    name="description"
    content="Convert Images to WebP for Faster Loading and Better User Experience. Start Optimizing Today!"
  />

  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>
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
        <Card title="Size" bind:on={onSize} color={2}>
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
        <Card title="Scale" bind:on={onScale} color={3}>
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
    {#if loading}
      <div class="text-white font-light text-center">
        <div>Converting...</div>
        <div class="text-2xl">{($progress * 100).toFixed(2)}%</div>
      </div>
    {:else if results}
      <div class="dropzone space-y-4">
        <div class="space-y-1">
          <div class="text-white text-center">Done!</div>
          <table>
            {#each results as [filename, beforeSize, afterSize]}
              <Result {filename} {beforeSize} {afterSize} />
            {/each}
          </table>
        </div>
        <div class="space-y-1">
          <div class="text-white font-light text-center">Drop your images here to start!</div>
          <div class="text-center">
            <button
              class="text-white font-light text-center text-sm underline"
              on:click={onClickUpload}>or Click to Upload Images</button
            >
          </div>
        </div>
      </div>
    {:else}
      <div class=" dropzone space-y-1">
        <div class="text-white font-light text-center">Drop your images here to start!</div>
        <div class="text-center">
          <button
            class="text-white font-light text-center text-sm underline"
            on:click={onClickUpload}>or Click to Upload Images</button
          >
        </div>
      </div>
    {/if}
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
    @apply p-8 rounded-2xl border border-dashed border-white border-opacity-50;
    box-shadow: 0 0 75vmin rgba(255, 255, 255, 0.75);
  }
</style>
