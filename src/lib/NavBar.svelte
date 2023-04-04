<script>
    import imageLogo from "../assets/LogoEscapeTours.png";
</script>

<div class="navbar bg-[#050505] h-20 flex z-20 p-4">
    <div class="navbar-start">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="dropdown">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 hover:bg-black"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <li
                    class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
                >
                    <a href="/">Inicio</a>
                </li>
                <li
                    class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
                    tabindex="0"
                >
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a href="/tours"> Sobre los tours </a>
                </li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <li
                    class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
                >
                    <a>Preguntas frecuentes</a>
                </li>
            </ul>
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="btn btn-ghost normal-case text-xl ">Escape tours</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li
                class="hover:border-b-2 hover:bg-black hover:border-yellow-300 transition hover:bg-clip-border hover:text-yellow-300"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="/">Inicio</a>
            </li>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <li
                class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
                tabindex="0"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="/tours"> Sobre los tours </a>
            </li>
            <li
                class="hover:border-b-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <a>Preguntas frecuentes</a>
            </li>
        </ul>
    </div>
    <div class="navbar-end">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            class="btn hover:border-2 hover:border-yellow-300 transition hover:bg-clip-border hover:bg-black hover:text-yellow-300"
            href="/contact"
            >Contactanos</a
        >
    </div>
</div>

<style>
</style>
