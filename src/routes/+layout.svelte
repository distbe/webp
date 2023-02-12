<script>
  import '$assets/css/app.css';
  import logo from '$assets/images/logo.svg';
  import { page } from '$app/stores';
</script>

<div class="flex flex-col min-h-screen h-px">
  <header class="sticky py-4 flex-none">
    <div class="w-full container px-4 mx-auto flex justify-between">
      <div class="corner">
        <a href="/"><img src={logo} alt="dist.be" class="w-[72px] h-[32px]" /></a>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <slot />
  </main>
</div>
