<script>
    import Activities from "./Activities.svelte";
    import Carrousel from "./Carrousel.svelte";
    import Gallery from "./Gallery.svelte";
</script>

<div
    class="px-4 py-16 bg-[#F4F4F4] text-black mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
>
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p
                class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
            >
                Tour
            </p>
        </div>
        <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
            <span class="relative inline-block">
                <svg
                    viewBox="0 0 52 24"
                    fill="#305faf"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                    <defs>
                        <pattern
                            id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                        width="52"
                        height="24"
                    />
                </svg>
                <span class="relative">Vente</span>
            </span>
            a <span class="text-black text-5xl">Bahía de kino</span> con nosotros
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
            ¿Quieres disfrutar de un paraíso terrenal? ¡Ven con <span
                class="text-2xl">Escape Tours</span
            > a Bahía de Kino! Déjate sorprender por sus hermosas playas de arena
            blanca, aguas cristalinas y exquisita gastronomía local. ¡No te lo pierdas!
        </p>
    </div>
    <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div class="grid grid-cols-2 gap-5">
            <img
                class="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://ik.imagekit.io/escapetours/1679453075590.jpg?updatedAt=1680172217619"
                alt=""
            />
            <img
                class="object-cover w-full h-48 rounded shadow-lg"
                src="https://ik.imagekit.io/escapetours/kino_three.jpg?updatedAt=1680154493402"
                alt=""
            />
            <img
                class="object-cover w-full h-48 rounded shadow-lg"
                src="https://ik.imagekit.io/escapetours/kino_five.jpg?updatedAt=1680154489732"
                alt=""
            />
        </div>
        <div class="flex flex-col justify-center">
            <div class="pb-4 mb-4 border-b">
                <h6 class="mb-2 font-semibold leading-5">
                    Descubre la belleza natural de Bahía de Kino con Escape
                    Tours
                </h6>
                <p class="text-sm text-gray-900">
                    Únete a Escape Tours y descubre la joya escondida de México,
                    Bahía de Kino. Nuestro tour te llevará a las playas más
                    hermosas de la región, donde podrás disfrutar del sol, arena
                    y mar cristalino. También explorarás los lugares más
                    icónicos de la zona, incluyendo la Reserva Ecológica Isla
                    Alcatraz y la comunidad pesquera de Kino Nuevo. Además,
                    disfrutarás de la deliciosa gastronomía local y te alojarás
                    en los mejores hoteles de la zona. ¡No pierdas la
                    oportunidad de vivir una experiencia inolvidable con Escape
                    Tours!
                </p>
            </div>
            <div class="pb-4 mb-4 border-b">
                <h6 class="mb-2 font-semibold leading-5">
                    Diviertete con todo lo que Bahía de Kino tiene para ofrecer
                    con Escape Tours
                </h6>
                <ul class="list-disc pl-5 mb-2 text-sm text-gray-900">
                    <li>
                        Playas de ensueño con aguas cristalinas y arenas blancas
                    </li>
                    <li>
                        Reserva Ecológica Isla Alcatraz, hogar de una gran
                        variedad de especies marinas y terrestres
                    </li>
                    <li>
                        Comunidad pesquera de Kino Nuevo, donde podrás conocer
                        su historia y probar su deliciosa gastronomía local
                    </li>
                    <li>
                        Actividades acuáticas como paseos en kayak y buceo para
                        explorar la belleza submarina de la zona
                    </li>
                    <li>
                        La tranquilidad y belleza natural de la región te
                        permitirán desconectar y relajarte completamente
                    </li>
                </ul>
                <p class="text-sm text-gray-900">
                    ¡Sumérgete en la maravilla natural de Bahía de Kino con
                    nuestro tour de Escape Tours! Disfruta de las playas de
                    ensueño con aguas cristalinas y arenas blancas, explora la
                    Reserva Ecológica Isla Alcatraz y su gran variedad de
                    especies marinas y terrestres, visita la comunidad pesquera
                    de Kino Nuevo y prueba su deliciosa gastronomía local.
                    Además, podrás participar en actividades acuáticas como
                    paseos en kayak y buceo para explorar la belleza submarina
                    de la zona. Todo esto en un ambiente de tranquilidad y
                    belleza natural que te permitirá desconectar y relajarte
                    completamente. ¡Únete a nosotros en esta aventura y descubre
                    todo lo que Bahía de Kino tiene para ofrecer!
                </p>
            </div>
        </div>
    </div>
    
</div>
