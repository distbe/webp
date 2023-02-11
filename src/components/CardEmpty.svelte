<a class="card-empty">
  <span class="card-empty__label">+</span>
</a>

<style>
  .card-empty {
    @apply relative aspect-[3/4] cursor-pointer w-[200px] p-4 rounded border-white border-dashed border-opacity-50 border bg-opacity-10 flex items-center justify-center text-[30px];
  }
  .card-empty__label {
    @apply text-[40px] text-white text-opacity-60;
  }
  /* .card-empty:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity: 0.5;
    mix-blend-mode: color-dodge;
    transition: all 0.33s ease;
    background-position: 50% 50%;
    background-size: 300% 300%;
    background: linear-gradient(
      115deg,
      transparent 0%,
      rgb(0, 231, 255) 25%,
      transparent 47%,
      transparent 53%,
      rgb(255, 0, 231) 75%,
      transparent 100%
    );
    opacity: 0.5;
    filter: brightness(0.5) contrast(1);
    z-index: 1;
  } */
</style>
