<script>
  import '$assets/css/app.css';
  import logo from '$assets/images/logo.png';
  import { page } from '$app/stores';
</script>

<div class="flex flex-col min-h-screen">
  <header class="sticky py-2">
    <div class="w-full container px-4 mx-auto flex justify-between">
      <div class="corner">
        <a href="/"><img src={logo} alt="dist.be" class="w-[72px] h-[32px]" /></a>
      </div>

      <nav>
        <ul class="flex gap-x-4">
          <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer class="pt-8 pb-4">
    <div class="container mx-auto px-4">
      <p class="text-sm text-gray-600">Copyright &copy; dist.be</p>
    </div>
  </footer>
</div>
