<script lang="ts">
  export let value: number | null = null;

  export let min: number | null = null;
  export let max: number | null = null;
</script>

<input type="number" class="input-number" {min} {max} bind:value />

<style>
  .input-number {
    @apply border border-white rounded-md w-full py-2 px-3 text-white leading-tight bg-transparent border-opacity-70 outline-none ring-0;
  }
</style>
