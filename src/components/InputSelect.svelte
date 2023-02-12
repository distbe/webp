<script context="module" lang="ts">
  export interface Option {
    label: string;
    value: unknown | null;
  }
</script>

<script lang="ts">
  export let value: unknown | null = null;
  export let options: (Option | string)[] = [];

  $: innerOptions = options.map((option) => {
    if (typeof option === 'string') {
      return { label: option, value: option };
    }
    return option;
  });
</script>

<select class="input-select" bind:value>
  {#each innerOptions as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<style>
  .input-select {
    @apply border border-white rounded-md w-full py-2 px-3 text-white leading-tight bg-transparent border-opacity-70 outline-none appearance-none;
  }
  .input-select:focus {
    @apply ring-blue ring-2;
  }
</style>
