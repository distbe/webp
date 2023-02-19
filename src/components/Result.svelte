<script lang="ts">
  export let filename: string;
  export let error: string | null = null;
  export let beforeSize: number;
  export let afterSize: number;

  $: rate = beforeSize === 0 ? null : (1 - afterSize / beforeSize) * 100;

  function formatBytes(size: number) {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function trimSlash(filename: string) {
    return filename.replace(/^\/+/, '');
  }
</script>

<tr class="result">
  <td class="result__filename">{trimSlash(filename)}</td>
  {#if error}
    <td class="result__error" colspan="4">
      {error}
    </td>
  {:else}
    <td class="result__size">{formatBytes(beforeSize)}</td>
    <td>→</td>
    <td class="result__size">{formatBytes(afterSize)}</td>
    {#if rate !== null}
      <td
        class="result__rate"
        class:result--good={rate > 0}
        class:result--bad={rate <= 0 && rate > -0.5}
        class:result--worse={rate <= -0.5}
      >
        ({rate.toFixed(2)}%)
      </td>
    {:else}
      <td />
    {/if}
  {/if}
</tr>

<style>
  .result {
    @apply text-white text-opacity-75 text-sm font-light text-center;
  }
  .result__filename {
    @apply text-left px-1;
  }
  .result__size {
    @apply text-right px-1;
  }
  .result__error {
    @apply text-red-500 text-center px-1;
  }
  .result__rate {
    @apply text-left px-1;
  }
  .result--good {
    @apply text-green-400;
  }
  .result--bad {
    @apply text-yellow-300;
  }
  .result--worse {
    @apply text-red-500;
  }
</style>
