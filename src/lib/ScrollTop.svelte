<script>
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowUpCircle } from "svelte-hero-icons";
    import * as animateScroll from "svelte-scrollto";

    export let buttonVisibleOnPX = 200;
    let hidden = true;

    const goStart = () => {
        animateScroll.scrollToTop();
    };

    const handleOnScroll = () => {
        if (scrollY > buttonVisibleOnPX) {
            hidden = false;
        } else {
            hidden = true;
        }
    };

    $: visible = !hidden;
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back_to_start" on:click={goStart} on:keydown={goStart} class:hidden>
    <Icon
        src={ArrowUpCircle}
        theme="solid"
        class="h-16 w-16 cursor-pointer text-yellow-300"
    />
</div>

<style>
    .back_to_start {
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 20px;
        user-select: none;
        bottom: 20px;
        color: yellow;
        padding: 5px;
        font-weight: 700;
        border-radius: 5px;
    }

    .back_to_start.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>
