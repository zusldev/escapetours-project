<script>
  import { Link } from "svelte-routing";
  import imageLogo from "../assets/LogoEscapeTours.webp";
  import * as animateScroll from "svelte-scrollto";
  import { Icon } from "@steeze-ui/svelte-icon";

  let navbarClass = "nav";
  let navbarOpacity = 1;

  function handleScroll() {
    const scrollTop = window.scrollY;

    // si la posición del scroll es mayor a 0, agrega la clase del max-width
    if (scrollTop > 0) {
      navbarClass = "container-navbar-scroll";
      navbarOpacity = 0.8;
    } else {
      navbarClass = "nav";
      navbarOpacity = 1;
    }
  }
  window.addEventListener("scroll", handleScroll);
</script>

<div
  class="navbar {navbarClass} fixed bg-gradient-to-r from-transparent/80 to-gray-900 h-20 flex z-20 p-4 transition-all duration-1000 ease-in-out"
  id="navbar"
  style="opacity: {navbarOpacity} transition-delay: 1s"
>
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
      class="btn hover:border-2 bg-primary text-gray-100 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
    >
      <Link to="/contact">Contacto</Link>
      <span>
        <!--svg phone vibration-->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      </span>
    </a>
  </div>
</div>

<style>
  .container-navbar-scroll {
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 5rem;
    padding: 0 2rem;
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 40;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease-in-out;
  }
</style>
