<script lang="ts">
  import InputSwitch from './InputSwitch.svelte';

  export let disabled = false;
  export let on = false;
  export let title: string;
</script>

<div class="card">
  <dvi class="card__header">
    <h3 class="card__title">{title}</h3>
    {#if !disabled}
      <InputSwitch bind:value={on} />
    {/if}
  </dvi>
  {#if on}
    <div class="card__body">
      <slot />
    </div>
  {/if}
</div>

<style>
  .card {
  }
  .card__header {
    @apply flex items-center justify-between  px-4 py-3 bg-[#1B2533] border-t border-white border-opacity-5 select-none;
  }
  .card__title {
    @apply text-white text-sm;
  }
  .card__body {
    @apply p-4 pb-6 bg-[#151E2C];
  }
</style>
