<script lang="ts">
  export let value: number | null = null;

  export let min: number | null = null;
  export let max: number | null = null;
  export let step: number | null = null;

  function setValue(v: number | null) {
    if (v === null) {
      return null;
    }
    v = Math.min(Math.max(v, min ?? -Infinity), max ?? Infinity);
    if (step !== null) {
      const offset = min ?? 0;
      v = Math.round((v - offset) / step) * step + offset;
    }
    return v;
  }

  $: value = setValue(value);
</script>

<input type="number" class="input-number" {min} {max} bind:value {step} />

<style>
  .input-number {
    @apply rounded-md w-full py-2 px-3 text-white leading-tight bg-white bg-opacity-5 outline-none;
  }
  .input-number:focus {
    @apply ring-blue ring-2;
  }
</style>
