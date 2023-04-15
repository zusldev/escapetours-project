<script>
  import { fly } from "svelte/transition";
  import Footer from "../lib/Footer.svelte";
  import NavBar from "../lib/NavBar.svelte";
  import Tour from "../lib/Tour.svelte";
  import bahia from "../content/bahia.js";
  import sanca from "../content/sanca.js";
  import Divisor from "../lib/Divisor.svelte";
  import Places from "../lib/Places.svelte";
  import places from "../content/places.js";
  import ToursGallery from "../lib/ToursGallery.svelte";
  import ScrollTop from "../lib/ScrollTop.svelte";
  import { onMount } from "svelte";

  let buttonStyle = "";

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    buttonStyle = `bottom-${scrollPosition > 0 ? "4" : "0"} right-4`;
  }
</script>

<NavBar />
<main in:fly={{ y: 200, duration: 800 }} out:fly={{ y: 500, duration: 800 }}>
  <div class="px-3 md:lg:xl:px-40 py-20 mb-10">
    <div class="flex flex-col justify-center">
      <h1 class="text-5xl font-extrabold text-[#FFD200] dark:text-white mb-8">
        Nuestros Tours
      </h1>
      <h3 class="text-2xl font-bold text-gray-400 mb-8">
        Por el momento contamos con los siguientes tours:
      </h3>
    </div>
    <div class="grid lg:xl:grid-cols-2 sm:grid-cols-1 gap-10">
      <Places title={places.placesKino.title} img={places.placesKino.img} />
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
    location={bahia.locationBahia.location}
    locationDescription={bahia.locationBahia.locationDescription}
    latitude={bahia.locationBahia.latitude}
    longitude={bahia.locationBahia.longitude}
    weather={bahia.locationBahia.weather}
    map={bahia.locationBahia.map}
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
    location={sanca.locationSanCarlos.location}
    locationDescription={sanca.locationSanCarlos.locationDescription}
    latitude={sanca.locationSanCarlos.latitude}
    longitude={sanca.locationSanCarlos.longitude}
    weather={sanca.locationSanCarlos.weather}
    map={sanca.locationSanCarlos.map}
  />
  <div class="container">
    <div class="flex flex-col py-20 justify-center">
      <h1 class="text-5xl font-extrabold text-[#FFD200] dark:text-white mb-8">
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
  </div>
  <ScrollTop />
  <div class="bottom-0 w-full mt-20">
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
