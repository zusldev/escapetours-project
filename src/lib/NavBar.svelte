<script>
  import { Link } from "svelte-routing";
  import imageLogo from "../assets/LogoEscapeTours.webp";
  import * as animateScroll from "svelte-scrollto";
</script>

<div class="navbar bg-[#050505] h-20 flex z-20 p-4">
  <div class="navbar-start">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="dropdown">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact text-gray-300 bg-black dropdown-content mt-3 p-2 w-52"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <li class="hover:underline transition hover:text-yellow-300">
          <Link to="/">Inicio</Link>
        </li>
        <li
          class="hover:underline transition hover:text-yellow-300"
          tabindex="0"
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <Link to="/tours">Tours</Link>
        </li>
        <li
          class="hover:underline transition hover:text-yellow-300"
          tabindex="0"
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <Link to="/social">Social</Link>
        </li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li class="hover:underline transition hover:text-yellow-300">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a
            href="/#faq"
            on:click={() =>
              animateScroll.scrollTo({
                element: "#faq",
                duration: 1000,
              })}
            on:keydown={() =>
              animateScroll.scrollTo({
                element: "#faq",
                duration: 1000,
              })}
          >
            Preguntas frecuentes
          </a>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <Link to="/" class="h-16 w-16 ">
        <img src={imageLogo} alt="Logo" class="h-16 w-16" />
      </Link>
    </div>
    <div>
      <Link to="/" class="hidden sm:block">
        <h1 class="ml-2 btn btn-ghost normal-case text-xl text-gray-300">
          Escape tours
        </h1>
      </Link>
    </div>
  </div>
  <div class="navbar-center hidden text-gray-300 lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li
        class="hover:border-b-2 hover:bg-black hover:border-yellow-300 transition hover:bg-clip-border hover:text-yellow-300"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <Link to="/">Inicio</Link>
      </li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li
        class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
        tabindex="0"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <Link to="/tours">Tours</Link>
      </li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li
        class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
        tabindex="0"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <Link to="/social">Social</Link>
      </li>
      <li
        class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
      >
        <a
          href="/#faq"
          on:click={() =>
            animateScroll.scrollTo({
              element: "#faq",
              duration: 1000,
            })}
          on:keydown={() =>
            animateScroll.scrollTo({
              element: "#faq",
              duration: 1000,
            })}
        >
          Preguntas frecuentes
        </a>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="btn hover:border-2 text-gray-300 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
    >
      <Link to="/contact">Contacto</Link>
    </a>
  </div>
</div>
