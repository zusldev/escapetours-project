<!-- component -->
<script>
    import galleryTour from "../content/galleryData";
</script>

<section class="text-gray-600 flex justify-center body-font">
    <div class="mx-auto">
        <div class="flex flex-wrap -m-4">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {#each galleryTour as item}
                    <div class="p-4">
                        <div class="relative rounded overflow-hidden">
                            <img
                                alt={item.alt}
                                class="w-full h-full object-cover object-center lg:h-[500px] sm:h-[300px] md:h-[400px]"
                                src={item.src}
                            />
                            <div
                                class="px-8 py-10 absolute inset-0 z-10 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                            >
                                <h2
                                    class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                                >
                                    {item.alt}
                                </h2>
                                <h1
                                    class="title-font text-lg font-medium text-gray-900 mb-3"
                                >
                                    {item.title}
                                </h1>
                                <p class="leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
