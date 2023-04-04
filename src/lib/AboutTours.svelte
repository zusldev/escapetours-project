<script>
    import Contact from "./Contact.svelte";
    import Footer from "./Footer.svelte";
    import FormContact from "./FormContact.svelte";
    import NavBar from "./NavBar.svelte";
    import Tour from "./Tour.svelte";
    import bahia from "../content/bahia";
    import sanca from "../content/sanca";
    import Gallery from "./Gallery.svelte";
    import Divisor from "./Divisor.svelte";
    import Places from "./Places.svelte";
    import places from "../content/places";
    import ToursGallery from "./ToursGallery.svelte";
    import Boxes from "./Boxes.svelte";
</script>

<main class="">
    <NavBar />

    <div class="px-3 md:lg:xl:px-40 py-20 mb-10">
        <div class="flex flex-col justify-center">
            <h1
                class="text-5xl font-extrabold text-[#FFD200] dark:text-white mb-8"
            >
                Nuestros Tours
            </h1>
            <h3 class="text-2xl font-bold text-gray-400 mb-8">
                Por el momento contamos con los siguientes tours:
            </h3>
        </div>
        <div class="grid lg:xl:grid-cols-2 sm:grid-cols-1 gap-10">
            <Places
                title={places.placesKino.title}
                img={places.placesKino.img}
            />
            <Places
                title={places.placesSanCarlos.title}
                img={places.placesSanCarlos.img}
            />
        </div>
    </div>
    <Divisor />
    <Tour
        title={bahia.title}
        description={bahia.description}
        resume={bahia.resume}
        imageWide={bahia.imageWide}
        altImgWide={bahia.altImgWide}
        imageTwo={bahia.imageTwo}
        altImgTwo={bahia.altImgTwo}
        imageThree={bahia.imageThree}
        altImgThree={bahia.altImgThree}
    />
    <Divisor />
    <Tour
        title={sanca.title}
        description={sanca.description}
        resume={sanca.resume}
        imageWide={sanca.imageWide}
        altImgWide={sanca.altImgWide}
        imageTwo={sanca.imageTwo}
        altImgTwo={sanca.altImgTwo}
        imageThree={sanca.imageThree}
        altImgThree={sanca.altImgThree}
    />
    <div class="container">
        <div class="flex flex-col py-20 justify-center">
            <h1
                class="text-5xl font-extrabold text-[#FFD200] dark:text-white mb-8"
            >
                Galería
            </h1>
            <h3 class="text-2xl font-bold text-gray-400 mb-8">
                Algunas fotos de nuestros tours y lugares a visitar:
            </h3>
            <Divisor />
        </div>
    </div>
    <div class="container">
        <ToursGallery />
        <Gallery />
        <Boxes />
    </div>
    <div class="bottom-0 w-full">
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
        width: 85%;
        gap: 50px;
    }
</style>
