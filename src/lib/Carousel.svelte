<script>
    import Swiper from "swiper";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import { onMount } from "svelte";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowLeftCircle, ArrowRightCircle } from "svelte-hero-icons";

    let swiper;

    onMount(() => {
        swiper = new Swiper(".swiper-container", {
            direction: "horizontal",
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
            },
        });
    });
</script>

<div class="swiper-container overflow-hidden">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="https://picsum.photos/id/1/500/300" alt="Slide 1" />
        </div>
        <div class="swiper-slide">
            <img src="https://picsum.photos/id/2/500/300" alt="Slide 2" />
        </div>
        <div class="swiper-slide">
            <img src="https://picsum.photos/id/3/500/300" alt="Slide 3" />
        </div>
    </div>
    <div class="swiper-pagination" />
    <div>
        <Icon
            src={ArrowLeftCircle}
            theme="solid"
            class="swiper-button-prev w-5 h-5 text-white"
        />
    </div>
    <div>
        <Icon
            src={ArrowRightCircle}
            theme="solid"
            class="swiper-button-next w-5 h-5 text-white"
        />
    </div>
</div>
