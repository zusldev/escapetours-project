<script>
    import FAQ from "./lib/FAQ.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import Body from "./lib/Body.svelte";
    import CityTour from "./lib/CityTour.svelte";
    import Description from "./lib/Description.svelte";

    import bahiaKino from "./assets/bahia-de-kino.jpg";
    import puertoPe from "./assets/puertope.jpeg";
    import sanCarlos from "./assets/sancarlos.jpg";
    import FlexPanels from "./lib/FlexPanels.svelte";
    import Panels from "./lib/Panels.svelte";
    import Contact from "./lib/Contact.svelte";
    import Footer from "./lib/Footer.svelte";
    import Email from "./lib/Email.svelte";
    import SocialMedia from "./lib/SocialMedia.svelte";
    import ToursGallery from "./lib/ToursGallery.svelte";
    import BahiaKino from "./lib/BahiaKino.svelte";
    import Gallery from "./lib/Gallery.svelte";
</script>

<main>
    <div>
        <NavBar />
        <Body />
        <Email />
    </div>
    <div class="container p-2 mt-10 mb-10">
        <BahiaKino />
        <Gallery />
        <BahiaKino />
        <Gallery />
        <FAQ />
        <ToursGallery />
        <Contact />
        <SocialMedia />
    </div>
    <Footer />
</main>

<style>
    .container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%;
        max-width: 80%;
    }
</style>
