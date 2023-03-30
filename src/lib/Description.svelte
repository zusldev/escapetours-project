<script>
    import Gallery from "./Gallery.svelte";
</script>

<div class="container bg-gray-800 text-white">
    <h2 class="text-2xl font-bold mb-4 text-center py-5 px-5">Bahía de Kino</h2>
    <div class="card bg-gray-700 p-4 mb-8">
        <p>
            Bahía de Kino es un hermoso destino turístico ubicado en la costa
            del Mar de Cortés, en el estado de Sonora, México. Es conocido por
            sus playas de arena blanca, aguas cristalinas y una gran variedad de
            actividades acuáticas.
        </p>
        <p class="mt-4">
            Con Escape Tours, puedes disfrutar de una experiencia inolvidable en
            Bahía de Kino. Te llevaremos en un tour de un día completo para que
            puedas explorar todo lo que este destino tiene para ofrecer.
        </p>
        <ul class="mt-4 list-disc list-inside">
            <li>Visita a las playas más hermosas de Bahía de Kino</li>
            <li>
                Disfruta de actividades acuáticas como kayaking, snorkeling y
                paddleboarding
            </li>
            <li>Conoce la cultura y tradiciones de la región</li>
            <li>Prueba la deliciosa gastronomía local</li>
        </ul>
        <p class="mt-4">
            ¡No te pierdas esta oportunidad única de explorar Bahía de Kino con
            Escape Tours!
        </p>
    </div>
    <Gallery />
    <div class="card bg-gray-700 p-4 mb-8">
        <h3 class="text-2xl font-bold mb-4">Itinerario</h3>
        <p class="mt-4">
            Este tour de un día completo incluye las siguientes actividades:
        </p>
        <ul class="mt-4 list-disc list-inside">
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
    <div class="containGallery bg-gray-700 p-4 mb-8">
        <Gallery />
    </div>
</div>
