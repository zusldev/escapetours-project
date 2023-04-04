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
                Por el momento contamos con 2 localidades:
            </h3>
        </div>
        <div class="header mb-24 grid lg:xl:grid-cols-2 sm:grid-cols-1 gap-10">
            <div
                class="bg-cover bg-center relative h-96"
                style="background-image:url('https://ik.imagekit.io/escapetours/kino_three.jpg?updatedAt=1680154493402'); background-size: cover; background-position: center; background-repeat: no-repeat;"
            >
                <div
                    class="absolute inset-0 flex bg-black hover:opacity-0 transition duration-300 ease-in opacity-80 items-center justify-center"
                >
                    <h1 class="text-5xl text-yellow-300 font-bold shadow-lg">
                        Bahía Kino
                    </h1>
                </div>
            </div>
            <div
                class="bg-cover bg-center relative h-96"
                style="background-image:url('https://ik.imagekit.io/escapetours/sancarlosTwo.jpg?updatedAt=1680516677129'); background-size: cover; background-position: center; background-repeat: no-repeat;"
            >
                <div
                    class="absolute inset-0 flex bg-black hover:opacity-0 transition duration-300 ease-in opacity-80 items-center justify-center"
                >
                    <h1 class="text-5xl text-yellow-300 font-bold shadow-lg">
                        San Carlos
                    </h1>
                </div>
            </div>
        </div>
        <!-- <Tour
            title={sanca.title}
            description={sanca.description}
            resume={sanca.resume}
            imageWide={sanca.imageWide}
            altImgWide={sanca.altImgWide}
            imageTwo={sanca.imageTwo}
            altImgTwo={sanca.altImgTwo}
            imageThree={sanca.imageThree}
            altImgThree={sanca.altImgThree}
        /> -->
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
        <Gallery />
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
