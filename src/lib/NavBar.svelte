<script>
  import { Link } from "svelte-routing";
  import imageLogo from "../assets/LogoEscapeTours.webp";
  import * as animateScroll from "svelte-scrollto";

  let isMenuOpen = false;
  let isHidden = "hidden";
  let opacity = "0";
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    isHidden = isMenuOpen ? "flex" : "hidden";
  };

  document.body.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
</script>

<nav class="w-full bg-navbarBg py-2 md:text-sm lg:text-base">
  <div
    class=" flex px-2 mx-5 justify-between max-w-screen-xl h-16 font-sans items-center md: md:justify-around md:flex-row md:m-auto md:p-0"
  >
    <button class="md:hidden" on:click|stopPropagation={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#9ca3af"
        class="w-8 h-8"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16"
        /></svg
      >
    </button>
    <Link
      to="/"
      class="text-amber-400 p-1 font-angry md:py-2 md:px-3 sm:block text-center text-2xl font-bold  rounded-md hover:scale-110 duration-200"
    >
      Escape tours
    </Link>

    <div
      class="{isHidden} bg-navbarBg z-10 top-14 p-5 flex-col overflow-auto text-sm absolute left-5 text-start rounded-md md:relative md:flex md:justify-between md:gap-x-3 lg:gap-x-7 md:flex-row md:top-0 md:left-0"
    >
      <Link
        to="/"
        class="hidden font-sans p-2 text-md  rounded-sm  text-white hover:text-slate-300  font-bold md:flex"
        >Inicio</Link
      >
      <Link
        to="/tours"
        class="font-sans p-2  text-md rounded-sm  text-white hover:text-slate-300  font-bold"
        >Tours</Link
      >
      <Link
        to="/social"
        class="font-sans p-2  text-md rounded-sm  text-white hover:text-slate-300  font-bold"
        >Social</Link
      >

      <a
        class="font-sans p-2 text-md rounded-sm text-white hover:text-slate-300 font-bold"
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
    </div>
    <Link
      to="/contact"
      class="transition-all duration-300
        [&_svg]:animate-[wiggle_1.2s_ease-in_infinite]  
        font-bold gap-1 py-2 px-3 rounded-md hover:from-[#fd2e46] hover:to-[#962230] hover:bg-gradient-to-b text-white bg-[#fd2e46] flex overflow-visible
        md:gap-0 md:p-3 lg:p-3 md:flex
        "
      >Contacto
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    </Link>
  </div>
</nav>
