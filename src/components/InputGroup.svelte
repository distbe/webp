<script lang="ts">
  export let label: string;
</script>

<div class="input-group">
  <div class="input-group__label">{label}</div>
  <slot />
</div>

<style>
  .input-group {
    @apply w-full space-y-0.5;
  }
  .input-group__label {
    @apply text-xs text-white text-opacity-75;
  }
</style>
