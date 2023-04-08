<script>
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowTopRightOnSquare } from "svelte-hero-icons";
</script>

<section class="bg-gray-900 dark:bg-gray-900">
    <div
        class="py-12 lg:flex lg:items-center flex-col lg:flex-row justify-center"
    >
        <div
            class="contenedor-post-text grid grid-cols-1 lg:grid-cols-2 place-items-center mx-auto max-w-screen-lg"
        >
            <div class="px-10">
                <h1
                    class="text-2xl font-semibold text-blue-600 dark:text-white md:text-3xl"
                >
                    Mira nuestras ultimas actualizaciones en Facebook
                </h1>
                <p class="mt-4 text-gray-300 dark:text-gray-400">
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
                            class="p-5 py-3 flex text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-full shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                        >
                            Visitar Facebook
                            <span class="ml-2 -mr-1">
                                <Icon
                                    src={ArrowTopRightOnSquare}
                                    class="w-5 h-5"
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
