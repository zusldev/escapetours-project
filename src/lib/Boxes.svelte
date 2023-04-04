<script>
    let images = [
        {
            url: "https://ik.imagekit.io/escapetours/Gallery_tour/1679457424699.png?updatedAt=1680588449765",
            alt: "Placeholder image 1",
            isExpanded: false,
        },
        {
            url: "https://ik.imagekit.io/escapetours/art.jpg?updatedAt=1680167179998",
            alt: "Placeholder image 2",
            isExpanded: false,
        },
        {
            url: "https://ik.imagekit.io/escapetours/instrucciones.png?updatedAt=1680157060895",
            alt: "Placeholder image 3",
            isExpanded: false,
        },
        {
            url: "https://ik.imagekit.io/escapetours/escapetours.png?updatedAt=1680157063390",
            alt: "Placeholder image 4",
            isExpanded: false,
        },
    ];

    function toggleExpand(index) {
        images[index].isExpanded = !images[index].isExpanded;
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {#each images as image, index}
        <div class="relative group">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
                class="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                src={image.url}
                alt={image.alt}
                on:click={() => toggleExpand(index)}
            />
            {#if image.isExpanded}
                <div
                    class="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img
                        class="max-w-full max-h-full"
                        src={image.url}
                        alt={image.alt}
                        on:click={() => toggleExpand(index)}
                    />
                </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    img {
        height: 500px;
    }

    @media (max-width: 640px) {
        img {
            height: 300px;
        }
    }
</style>
