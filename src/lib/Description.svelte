<script>
    import FlexPanels from "./FlexPanels.svelte";
    import Gallery from "./Gallery.svelte";
    import Panels from "./Panels.svelte";
</script>

<div class="container">
    <h2>Bahía de Kino</h2>
    <div class="card">
        <p>
            Bahía de Kino es un hermoso destino turístico ubicado en la costa
            del Mar de Cortés, en el estado de Sonora, México. Es conocido por
            sus playas de arena blanca, aguas cristalinas y una gran variedad de
            actividades acuáticas.
        </p>
        <p>
            Con Escape Tours, puedes disfrutar de una experiencia inolvidable en
            Bahía de Kino. Te llevaremos en un tour de un día completo para que
            puedas explorar todo lo que este destino tiene para ofrecer.
        </p>
        <ul>
            <li>Visita a las playas más hermosas de Bahía de Kino</li>
            <li>
                Disfruta de actividades acuáticas como kayaking, snorkeling y
                paddleboarding
            </li>
            <li>Conoce la cultura y tradiciones de la región</li>
            <li>Prueba la deliciosa gastronomía local</li>
        </ul>
        <p>
            ¡No te pierdas esta oportunidad única de explorar Bahía de Kino con
            Escape Tours!
        </p>
    </div>
    <div class="showImages">
        <Panels />
    </div>
    <div class="card">
        <h3>Itinerario</h3>
        <p>Este tour de un día completo incluye las siguientes actividades:</p>
        <ul>
            <li>
                Visita a las playas más hermosas de Bahía de Kino, como Playa
                Hermosa, Playa del Amor y Playa de los Muertos
            </li>
            <li>Kino viejo</li>
            <li>Kino nuevo</li>
            <li>Paseo en lancha (opcional)</li>
            <li>Paseo en banana (opcional)</li>
            <li>Conoce la cultura y tradiciones de la región</li>
            <li>Prueba la deliciosa gastronomía local</li>
        </ul>
    </div>
    <div class="showImages">
        <Gallery />
    </div>
</div>

<style>
    .container {
        color: white;
        padding: 20px;
        max-width: 70%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%;
        /* background: rgba(204,100,7, 0.7); */
        border: 3px solid transparent;
    }
    .card {
        padding: 20px;
        background-color: #f8f8f8;
        color: #000000;
        border-radius: 1rem;
        margin-top: 20px;
    }
    .showImages {
        justify-content: center;
        margin-top: 20px;
    }

    h2 {
        padding-top: 10px;
        margin-top: 2rem;
        text-align: center;
        color: #000000;
        margin-bottom: 10px;
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
    }

    li {
        margin-bottom: 5px;
    }
</style>
