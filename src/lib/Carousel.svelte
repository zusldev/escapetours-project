<script>
    import { onMount } from "svelte";
    import "swiper/swiper-bundle.min.css";
    import Swiper, { Navigation } from "swiper";

    Swiper.use([Navigation]);

    export let media = [];

    onMount(() => {
        const swiper = new Swiper(".swiper-container", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
</script>

<div class="swiper-container overflow-hidden relative">
    <div class="swiper-wrapper">
        {#each media as item}
            {#if item.type === "IMAGE"}
                <div class="swiper-slide">Slide image</div>
            {/if}
            {#if item.type === "VIDEO"}
                <div class="swiper-slide">Slide VIDEO</div>
            {/if}
        {/each}
    </div>
    <!-- Add Arrows -->
    <div
        class="swiper-button-next text-red-500 hover:text-red-700 text-3xl font-bold absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
    />
    <div
        class="swiper-button-prev text-red-500 hover:text-red-700 text-3xl font-bold absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
    />
</div>

<style>
    .swiper-container {
        max-width: 470px;
        margin: 0 auto;
        border-radius: 10px;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;
        height: 250px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        color: #f00;
    }
</style>
