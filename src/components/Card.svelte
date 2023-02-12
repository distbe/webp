<script lang="ts">
  export let disabled = false;
  export let on = false;
  export let title: string;
  export let color = 1;

  function toggle() {
    if (disabled) {
      return;
    }
    on = !on;
  }
</script>

<div
  class="card"
  class:card--on={on}
  class:card--off={!on}
  class:card--color1={color === 1}
  class:card--color2={color === 2}
  class:card--color3={color === 3}
>
  <dvi class="card__header">
    <h3 class="card__title">{title}</h3>
    {#if !disabled}
      <button class="card__toggle" on:click|preventDefault={toggle}>{on ? 'On' : 'Off'}</button>
    {/if}
  </dvi>
  <div class="card__body">
    <slot />
  </div>
</div>

<!--
  ref. https://codepen.io/gayane-gasparyan/pen/jOmaBQK Card Blink
-->
<style>
  @property --rotate {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  .card {
    @apply relative block aspect-[3/4] w-[200px] p-4 space-y-4;
    background: #191c29;
    border-radius: 8px;
  }
  .card::before {
    @apply -inset-[4px];
    content: '';
    border-radius: 12px;
    position: absolute;
    z-index: -1;
  }

  .card--on.card::before {
    animation: rotate 5s linear infinite;
  }
  .card--color1.card--on.card::before {
    background-image: linear-gradient(var(--rotate), #dd31d2, #519cff);
  }
  .card--color2.card--on.card::before {
    background-image: linear-gradient(var(--rotate), #519cff, #00d5ff);
  }
  .card--color3.card--on.card::before {
    background-image: linear-gradient(var(--rotate), #00d5ff, #0fffd3);
  }

  .card--off.card::before {
    @apply bg-gray-600;
  }

  .card::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
  }

  .card--on.card::after {
    transform: scale(0.75);
    filter: blur(60px);
    animation: rotate 5s linear infinite;
  }

  .card--color1.card--on.card::after {
    background-image: linear-gradient(var(--rotate), #dd31d2, #519cff);
  }

  .card--color2.card--on.card::after {
    background-image: linear-gradient(var(--rotate), #519cff, #00d5ff);
  }

  .card--color3.card--on.card::after {
    background-image: linear-gradient(var(--rotate), #00d5ff #0fffd3);
  }

  .card__header {
    @apply flex items-center justify-between;
  }

  .card__title {
  }

  .card--on .card__title {
    color: transparent;
    background-size: 1000px 100%;
    animation: text 5s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
  }
  .card--color1.card--on .card__title {
    background-image: linear-gradient(to left, #519cff, #dd31d2, #519cff);
  }
  .card--color2.card--on .card__title {
    background-image: linear-gradient(to left, #00d5ff, #519cff, #00d5ff);
  }
  .card--color3.card--on .card__title {
    background-image: linear-gradient(to left, #0fffd3, #00d5ff, #0fffd3);
  }

  .card--off .card__title {
    @apply text-gray-600;
  }

  .card__toggle {
    @apply border  rounded px-2 py-1 text-xs;
  }
  .card--on .card__toggle {
    @apply border-green-400 text-green-400;
  }
  .card--off .card__toggle {
    @apply border-gray-400 text-gray-400;
  }

  @keyframes text {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
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
