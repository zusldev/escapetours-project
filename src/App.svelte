<script>
    import FAQ from "./lib/FAQ.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import Body from "./lib/Body.svelte";
    import Contact from "./lib/Contact.svelte";
    import Footer from "./lib/Footer.svelte";
    import Email from "./lib/Email.svelte";
    import BahiaKino from "./lib/BahiaKino.svelte";
    import Gallery from "./lib/Gallery.svelte";
    import Boxes from "./lib/Boxes.svelte";
</script>

<main class="w-full">
    <div>
        <NavBar />
        <Body />
    </div>
    <div class="items-center justify-center mx-auto">
        <Email />
    </div>

    <div
        class="container p-2 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400"
    >
        <div class="border-t border-gray-600 mt-10" />
        <BahiaKino />

        <div class="border-t border-gray-600 mt-10" />
        <h2 class="text-4xl font-bold text-yellow-300 text-center mb-8">
            Galería
        </h2>
        <Gallery />
        <Boxes />
        <div class="border-t border-gray-600 mt-10" />
        <FAQ />
        <div class="border-t border-gray-600 mt-10" />
        <Contact />
    </div>
    <div class="bottom-0 w-full text-white">
        <Footer />
    </div>
</main>

<style>
    .container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%;
    }
</style>
