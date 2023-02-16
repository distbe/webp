<script lang="ts">
  export let value: boolean = false;

  function onClick() {
    value = !value;
  }
</script>

<div class="input-switch" on:click={onClick} class:input-switch--on={value}>
  <div class="input-switch__control" />
</div>

<style>
  .input-switch {
    @apply w-8 h-4 bg-gray-500 rounded-full relative transition-colors cursor-pointer;
  }
  .input-switch__control {
    @apply w-4 h-4 bg-gray-200 rounded-full absolute top-0 left-0 transition-transform;
  }
  .input-switch.input-switch--on {
    @apply bg-blue;
  }

  .input-switch.input-switch--on .input-switch__control {
    transform: translateX(100%);
  }
</style>
