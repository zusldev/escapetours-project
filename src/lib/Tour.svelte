<script>
    export let title;
    export let description;
    export let resume;
    export let imageWide;
    export let altImgWide;
    export let imageTwo;
    export let altImgTwo;
    export let imageThree;
    export let altImgThree;
</script>

<div
    class="px-4 py-16 bg-gray-900 text-black mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
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
            a <span class="text-black text-5xl">{title}</span> con nosotros
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
            ¿Quieres disfrutar de un paraíso terrenal? ¡Ven con <span
                class="text-2xl">Escape Tours</span
            > a {title}! Déjate sorprender por sus hermosas playas de arena
            blanca, aguas cristalinas y exquisita gastronomía local. ¡No te lo pierdas!
        </p>
    </div>
    <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div class="grid grid-cols-2 gap-5">
            <img
                class="object-cover w-full h-56 col-span-2 rounded shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                src={imageWide}
                alt={altImgWide}
            />
            <img
                class="object-cover w-full h-48 rounded shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                src={imageTwo}
                alt={altImgTwo}
            />
            <img
                class="object-cover w-full h-48 rounded shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                src={imageThree}
                alt={altImgThree}
            />
        </div>
        <div class="flex flex-col justify-center">
            <div class="pb-4 mb-4 border-b">
                <h6 class="mb-2 font-semibold leading-5">
                    Descubre la belleza natural de {title} con Escape
                    Tours
                </h6>
                <p class="text-sm text-gray-900">
                    {description}
                </p>
            </div>
            <div class="pb-4 mb-4 border-b">
                <h6 class="mb-2 font-semibold leading-5">
                    Diviertete con todo lo que {title} tiene para ofrecer
                    con Escape Tours
                </h6>
                <!-- <ul class="list-disc pl-5 mb-2 text-sm text-gray-900">
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
                </ul> -->
                <p class="text-sm text-gray-900">
                    {resume}
                </p>
            </div>
        </div>
    </div>
    
</div>
