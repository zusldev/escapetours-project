<script>
    import NavBar from "./lib/NavBar.svelte";
    import Body from "./lib/Body.svelte";
    import CityTour from "./lib/CityTour.svelte";
</script>

<main>
    <NavBar />
    <Body />
    <div class="city-tours">
        <CityTour title="Bahía de Kino" backgroundImage = "url('/src/assets/bahia-de-kino.jpg')"/>
        <CityTour title="Puerto peñasco" backgroundImage = "url('/src/assets/puertope.jpeg')"/>
        <CityTour title="San carlos" backgroundImage = "url('/src/assets/sancarlos.jpg')"/>
    </div>
</main>

<style>
    .city-tours {
        display: flex;
        justify-content: center;
        gap: 5rem;
        margin-top: 10px;
    }
</style>
