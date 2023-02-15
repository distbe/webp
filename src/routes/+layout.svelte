<script>
  import '$assets/css/app.css';
  import logo from '$assets/images/logo.svg';
  import { page } from '$app/stores';

  const version = VERSION;
</script>

<div class="flex flex-col min-h-screen h-px">
  <header class="sticky py-4 flex-none">
    <div class="w-full container px-2 mx-auto flex justify-between">
      <a href="/" class="brand">WebP Converter</a>
    </div>
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer>
    <div class="container mx-auto px-4 flex justify-center py-2">
      <div class="flex items-center gap-x-1">
        <a href="https://github.com/distbe" target="_blank" rel="noopener noreferrer"
          ><img src={logo} alt="dist.be" class="w-[54px] h-[24px]" /></a
        >
        <div class="text-white font-light text-sm text-opacity-75">&copy; 2023</div>
      </div>
      <div class="absolute right-0 bottom-0 p-2 text-sm text-white text-opacity-30 select-none">
        v{version}
      </div>
    </div>
  </footer>
</div>

<style>
  .brand {
    @apply text-2xl text-transparent;
    font-family: 'Covered By Your Grace', cursive;
    background-image: linear-gradient(to left, #519cff, #00d5ff, #0fffd3, #00d5ff, #519cff);
    background-size: 600px 100%;
    background-clip: text;
    animation: text 10s linear infinite;
  }

  @keyframes text {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 600px;
    }
  }
</style>
