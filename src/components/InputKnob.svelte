<script lang="ts">
  export let value: number | null = null;

  export let min: number;
  export let max: number;
  export let step: number | null = null;

  export let knobElem: HTMLDivElement | null = null;
  export let controlDashArray = '';
  export let controlDashOffset = 0;

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

  function setPoint(clientX: number, clientY: number) {
    const { left, top, width, height } = knobElem!.getBoundingClientRect();
    const x = left + width / 2 - clientX;
    const y = top + height / 2 - clientY;
    value = (Math.atan2(-x, y) / (2 * Math.PI) + 0.5) * (max - min) + min;
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
    setPoint(e.clientX, e.clientY);
  }

  function onMouseUp(e: MouseEvent) {
    e.preventDefault();
    setPoint(e.clientX, e.clientY);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  function onTouchStart() {
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  }

  function onTouchMove(e: TouchEvent) {
    if (e.touches.length == 1) {
      setPoint(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    setPoint(e.touches[0].clientX, e.touches[0].clientY);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
  }
</script>

<div
  class="input-knob"
  bind:this={knobElem}
  on:wheel|preventDefault|stopPropagation={onWheel}
  on:mousedown|preventDefault={onMouseDown}
  on:touchstart|preventDefault={onTouchStart}
>
  <svg width="100" height="100" class="input-knob__control" viewBox="0 0 100 100">
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
</div>

<style>
  .input-knob {
    @apply aspect-square relative p-4;
  }
  .input-knob__control {
    @apply w-full h-full stroke-current text-blue;
  }
</style>
