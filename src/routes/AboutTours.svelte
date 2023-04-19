<script>
  import {fly} from "svelte/transition";
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
  import {onMount} from "svelte";

  export let location; // svelte-routing issue
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

<NavBar/>
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
      <Places img={places.placesKino.img} title={places.placesKino.title}/>
      <Places
        img={places.placesSanCarlos.img}
        title={places.placesSanCarlos.title}
      />
    </div>
  </div>
  <Divisor/>
  <Tour
    altImgThree={bahia.altImgThree}
    altImgTwo={bahia.altImgTwo}
    altImgWide={bahia.altImgWide}
    description={bahia.description}
    imageThree={bahia.imageThree}
    imageTwo={bahia.imageTwo}
    imageWide={bahia.imageWide}
    latitude={bahia.locationBahia.latitude}
    location={bahia.locationBahia.location}
    locationDescription={bahia.locationBahia.locationDescription}
    longitude={bahia.locationBahia.longitude}
    map={bahia.locationBahia.map}
    resume={bahia.resume}
    title={bahia.title}
    weather={bahia.locationBahia.weather}
  />
  <Divisor/>
  <Tour
    altImgThree={sanca.altImgThree}
    altImgTwo={sanca.altImgTwo}
    altImgWide={sanca.altImgWide}
    description={sanca.description}
    imageThree={sanca.imageThree}
    imageTwo={sanca.imageTwo}
    imageWide={sanca.imageWide}
    latitude={sanca.locationSanCarlos.latitude}
    location={sanca.locationSanCarlos.location}
    locationDescription={sanca.locationSanCarlos.locationDescription}
    longitude={sanca.locationSanCarlos.longitude}
    map={sanca.locationSanCarlos.map}
    resume={sanca.resume}
    title={sanca.title}
    weather={sanca.locationSanCarlos.weather}
  />
  <div class="container">
    <div class="flex flex-col py-20 justify-center">
      <h1 class="text-5xl font-extrabold text-[#FFD200] dark:text-white mb-8">
        Galería
      </h1>
      <h3 class="text-2xl font-bold text-gray-400 mb-8">
        Algunas fotos de nuestros tours y lugares a visitar:
      </h3>
      <Divisor/>
    </div>
  </div>
  <div class="container">
    <ToursGallery/>
  </div>
  <ScrollTop/>
  <div class="bottom-0 w-full mt-20">
    <Footer/>
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
