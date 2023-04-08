<script>
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowTopRightOnSquare } from "svelte-hero-icons";
</script>

<section
    class="bg-gradient-to-r from-blue-800 to-indigo-600 dark:from-gray-900 dark:to-gray-800"
>
    <div
        class="py-12 lg:flex lg:items-center flex-col lg:flex-row justify-center"
    >
        <div
            class="contenedor-post-text grid grid-cols-1 lg:grid-cols-2 place-items-center mx-auto max-w-screen-lg"
        >
            <div class="px-10">
                <h1 class="text-3xl font-bold text-white md:text-4xl">
                    Mira nuestras últimas actualizaciones en Facebook
                </h1>
                <p class="mt-4 text-gray-200 dark:text-gray-400">
                    Si quieres ver más de nuestras publicaciones, visita nuestra
                    página de Facebook.
                </p>
                <div class="flex mt-6">
                    <a
                        href="https://www.facebook.com/escapetoursmex"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            class="flex items-center justify-center p-5 py-3 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded-full shadow-md sm:w-auto hover:bg-blue-700 dark:hover:bg-blue-500 dark:bg-blue-700"
                        >
                            Visitar Facebook
                            <span class="ml-2 -mr-1">
                                <Icon
                                    class="w-5 h-5"
                                    src={ArrowTopRightOnSquare}
                                    theme="solid"
                                />
                            </span>
                        </button>
                    </a>
                </div>
            </div>

            <div class="lg:w-1/2 order-0 lg:order-1 mt-6 lg:mt-0">
                <div class="postContainer">
                    <iframe
                        src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fescapetoursmex&width=350&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=700"
                        scrolling="yes"
                        style="border:none; overflow:hidden; width:350px; height:700px; background: white;"
                        class="rounded-lg"
                        frameborder="0"
                        title="Nuestras últimas publicaciones en Facebook"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
