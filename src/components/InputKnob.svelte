<script lang="ts">
  export let value: number | null = null;

  export let min: number | null = null;
  export let max: number | null = null;
</script>

<div class="input-knob">
  <div class="input-knob__control" on:scroll|preventDefault|stopPropagation />
</div>

<style>
  .input-knob {
    @apply aspect-square relative p-4;
  }
  .input-knob__control {
    @apply border-2 border-blue-500 rounded-full w-full h-full;
  }
</style>
