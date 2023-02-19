<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';

  import Result from '$components/Result.svelte';
  import Card from '$components/Card.svelte';
  import InputGroup from '$components/InputGroup.svelte';
  import InputNumber from '$components/InputNumber.svelte';
  import InputSelect from '$components/InputSelect.svelte';
  import { download } from '$lib/utils/blob';
  import { loadVips, type Fit } from '$lib/utils/vips';

  import logo from '$assets/images/logo.svg';
  import { dataTransferToBuffers, type FileBufferResult } from '$lib/utils/file';
  import { transformFileBuffer } from '$lib/utils/transform';

  const version = VERSION;

  type InlineResult = [
    filename: string,
    error: string | null,
    beforeSize: number,
    afterSize: number
  ];

  let mounted = false;
  let isDragging = false;

  let loading = false;
  let progress = tweened(0);
  let results: InlineResult[] | null = null;

  let inputQuality: number | null = null;

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

  $: saveState({
    inputQuality,
    onSize,
    inputWidth,
    inputHeight,
    inputFit,
    onScale,
    inputScale
  });

  onMount(() => {
    const state = localStorage.getItem('state');
    if (state) {
      try {
        const parsed = JSON.parse(state);
        inputQuality = parsed.inputQuality;
        onSize = parsed.onSize;
        inputWidth = parsed.inputWidth;
        inputHeight = parsed.inputHeight;
        inputFit = parsed.inputFit;
        onScale = parsed.onScale;
        inputScale = parsed.inputScale;
      } catch {
        //
      }
    }
    inputQuality = inputQuality ?? 100; // default
    mounted = true;
  });

  function saveState(state: {
    inputQuality: number | null;
    onSize: boolean;
    inputWidth: number | null;
    inputHeight: number | null;
    inputFit: Fit;
    onScale: boolean;
    inputScale: number;
  }) {
    if (!mounted) return;
    localStorage.setItem('state', JSON.stringify(state));
  }

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
    if (files.length === 0) {
      return;
    }
    const buffers = await Promise.all(
      [...files].map(async (f): Promise<FileBufferResult> => {
        return {
          name: f.name,
          size: f.size,
          type: f.type,
          buffer: await f.arrayBuffer()
        };
      })
    );
    await transform(buffers);
  }

  async function onDrop(e: DragEvent) {
    isDragging = false;
    transform(await dataTransferToBuffers(e.dataTransfer));
  }

  async function transform(files: FileBufferResult[]) {
    if (files.length === 0) {
      return;
    }

    loading = true;
    const vips = await loadVips();
    const transformResults = await transformFileBuffer(
      vips,
      files,
      {
        quality: inputQuality ?? 100,
        width: onSize ? inputWidth : null,
        height: onSize ? inputHeight : null,
        fit: onSize ? inputFit : null,
        scale: onScale ? inputScale : null
      },
      (p) => {
        progress.set(p);
      }
    );

    results = transformResults.map((r) => {
      return [r.filename, r.error, r.size, r.blob?.size ?? 0];
    });
    loading = false;

    if (transformResults.length === 1 && transformResults[0].blob) {
      const basename = transformResults[0].filename.replace(/\.[^/.]+$/, '');
      download(transformResults[0].blob, `${basename}.webp`);
      return;
    }

    const zip = await import('jszip').then((m) => new m.default());
    const filenames = new Set<string>();
    for (const { blob, filename } of transformResults) {
      if (!blob) {
        continue;
      }
      const basename = filename.replace(/\.[^/.]+$/, '');
      let newFilename = basename;
      let i = 1;
      while (filenames.has(newFilename)) {
        newFilename = `${basename} (${i})`;
        i++;
      }
      filenames.add(newFilename);
      zip.file(`${newFilename}.webp`, blob);
    }

    if (filenames.size === 0) {
      return;
    }

    const blob = await zip.generateAsync({ type: 'blob' });
    download(blob, 'images.zip');
  }
</script>

<svelte:body on:dragenter|preventDefault|stopPropagation={onDragEnter} />

<div class="flex h-full">
  <aside class="flex-[320px] flex-grow-0 flex-shrink-0 bg-[#151E2C] flex flex-col">
    <div class="flex-1">
      <div class="">
        <Card title="Settings" on={true} disabled>
          <InputGroup label="Quality">
            <div class="space-y-4">
              <InputNumber bind:value={inputQuality} max={100} min={0} step={1} />
            </div>
          </InputGroup>
        </Card>
        <Card title="Size" bind:on={onSize}>
          <div class="space-y-3">
            <InputGroup label="Width">
              <InputNumber bind:value={inputWidth} min={0} step={1} />
            </InputGroup>
            <InputGroup label="Height">
              <InputNumber bind:value={inputHeight} min={0} step={1} />
            </InputGroup>
            <InputGroup label="Fit">
              <InputSelect
                options={['Cover', 'Contain', 'Fill', 'Inside', 'Outside']}
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
  </aside>
  <main class="flex-1 flex-col flex">
    <section class="flex-1 flex items-center justify-center">
      {#if loading}
        <div class="text-white font-light text-center">
          <div>Converting...</div>
          <div class="text-2xl">{($progress * 100).toFixed(2)}%</div>
        </div>
      {:else}
        <div class="dropzone space-y-4">
          {#if results}
            <div class="space-y-1">
              <div class="text-white text-center">Done!</div>
              <table>
                {#each results as [filename, error, beforeSize, afterSize]}
                  <Result {filename} {error} {beforeSize} {afterSize} />
                {/each}
              </table>
            </div>
          {/if}
          <div class="space-y-3">
            <div>
              <div class="text-white text-opacity-75 font-light text-center text-2xl">
                Drop your images here!
              </div>
              <div class="text-center">
                <button
                  class="text-white font-light text-sm underline leading-tight"
                  on:click={onClickUpload}>or click to upload images</button
                >
              </div>
            </div>
            <div class="text-white font-light text-center text-sm text-opacity-70">
              Supports JPG, PNG, GIF, TIFF, WEBP, SVG.
            </div>
          </div>
        </div>
      {/if}
    </section>
    <footer class="relative">
      <div class="absolute right-0 bottom-0 py-2 px-3 flex items-center gap-x-2">
        <a href="https://github.com/distbe" target="_blank" rel="noopener noreferrer"
          ><img src={logo} alt="dist.be" class="w-[54px] h-[24px]" /></a
        >
        <div class="text-sm text-white text-opacity-30">v{version}</div>
      </div>
    </footer>
  </main>
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
  @property --rotate {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  .dropzone {
    @apply relative p-8;
    background: #191c29;
    border-radius: 8px;
  }

  .dropzone::before {
    @apply -inset-[4px];
    content: '';
    border-radius: 12px;
    position: absolute;
    z-index: -1;
    animation: rotate 5s linear infinite;
    background-image: linear-gradient(var(--rotate), #dd31d2, #519cff);
  }
  .dropzone::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    transform: scale(0.75);
    filter: blur(60px);
    animation: rotate 5s linear infinite;
    background-image: linear-gradient(var(--rotate), #dd31d2, #519cff);
  }

  @keyframes rotate {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
</style>
