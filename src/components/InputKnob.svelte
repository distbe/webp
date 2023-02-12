<script lang="ts">
  import { onMount } from 'svelte';

  export let value: number | null = null;

  export let min: number;
  export let max: number;
  export let step: number | null = null;

  export let controlElem: HTMLDivElement | null = null;
  export let controlSize = 0;
  export let controlDashArray = '';
  export let controlDashOffset = 0;

  onMount(() => {
    const rect = controlElem?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    controlSize = Math.min(rect.width, rect.height);
  });

  $: {
    setValue(value);
    setControlDash(value);
  }

  function setValue(v: number | null) {
    if (v === null) {
      return null;
    }
    v = Math.min(Math.max(v, min), max);
    if (step !== null) {
      const offset = min ?? 0;
      v = Math.round((v - offset) / step) * step + offset;
    }
    value = v;
  }

  const D = 2 * Math.PI * 48.5;
  function setControlDash(v: number | null) {
    v = v ?? 0;
    const range = max - min;
    const ratio = range === 0 ? 0 : (v - min) / range;
    controlDashArray = `${D * ratio} ${D * (1 - ratio)}`;
  }

  function onWheel(e: WheelEvent) {
    if (e.deltaY) {
      value = (value ?? min) + (e.deltaY > 0 ? 1 : -1) * (step ?? 1);
    }
  }

  function onMouseDown() {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(e: MouseEvent) {
    const { left, top, width, height } = controlElem!.getBoundingClientRect();
    const x = left + width / 2 - e.clientX;
    const y = top + height / 2 - e.clientY;
    value = (Math.atan2(-x, y) / (2 * Math.PI) + 0.5) * (max - min) + min;
  }

  function onMouseUp(e: MouseEvent) {
    e.preventDefault();
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  function onTouchStart() {
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  }

  function onTouchMove(e: TouchEvent) {
    if (e.touches.length == 1) {
      const { left, top, width, height } = controlElem!.getBoundingClientRect();
      const x = left + width / 2 - e.touches[0].clientX;
      const y = top + height / 2 - e.touches[0].clientY;
      value = (Math.atan2(-x, y) / (2 * Math.PI) + 0.5) * (max - min) + min;
    }
  }

  function onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
  }
</script>

<div class="input-knob">
  <div
    class="input-knob_controlElem"
    on:wheel|preventDefault|stopPropagation={onWheel}
    on:mousedown|preventDefault={onMouseDown}
    on:touchstart|preventDefault={onTouchStart}
    bind:this={controlElem}
  >
    {#if controlSize > 0}
      <svg
        width={controlSize}
        height={controlSize}
        class="stroke-current text-blue"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48.5"
          stroke-width="3"
          fill="transparent"
          transform="rotate(90 50 50)"
          stroke-dasharray={controlDashArray}
          stroke-dashoffset={controlDashOffset}
        />
      </svg>
    {/if}
  </div>
</div>

<style>
  .input-knob {
    @apply aspect-square relative p-4;
  }
  .input-knob_controlElem {
    @apply w-full h-full;
  }
</style>
