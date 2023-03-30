<script>
    import NavBar from "./lib/NavBar.svelte";
    import Body from "./lib/Body.svelte";
    import CityTour from "./lib/CityTour.svelte";
    import Description from "./lib/Description.svelte";

    import bahiaKino from "./assets/bahia-de-kino.jpg";
    import puertoPe from "./assets/puertope.jpeg";
    import sanCarlos from "./assets/sancarlos.jpg";
    import FlexPanels from "./lib/FlexPanels.svelte";
    import Panels from "./lib/Panels.svelte";
</script>

<main>
    <div>
        <Body />
    </div>
    <section class="container">
        <div class="city-tours">
            <CityTour title="Bahía de Kino" backgroundImage={bahiaKino} />
            <CityTour title="Puerto peñasco" backgroundImage={puertoPe} />
            <CityTour title="San carlos" backgroundImage={sanCarlos} />
        </div>
        <Description />
    </section>
</main>

<style>
    .city-tours {
        display: flex;
        justify-content: center;
        gap: 5rem;
        margin-top: 2rem;
    }

    .container {
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%;
        /* background: rgba(204,100,7, 0.7); */
        border: 3px solid transparent;
        width: 80%;
    }
</style>
