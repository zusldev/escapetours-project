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
    class="px-4 py-16 text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
>
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p
                class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-300 uppercase rounded-full bg-teal-accent-400"
            >
                Tour
            </p>
        </div>
        <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
        >
            <span class="relative inline-block">
                <svg
                    viewBox="0 0 52 24"
                    fill="#FFD200"
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
            a <span class="text-[#FFD200] text-5xl">{title}</span> con nosotros
        </h2>
        <p class="text-white md:text-lg">
            ¿Quieres disfrutar de un paraíso terrenal? ¡Ven con <span
                class="text-2xl underline">Escape Tours</span
            >
            a {title}! Déjate sorprender por sus hermosas playas de arena
            blanca, aguas cristalinas y exquisita gastronomía local. ¡No te lo
            pierdas!
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
                <h6 class="mb-2 text-2xl font-semibold leading-5">
                    Descubre la belleza natural de {title} con Escape Tours
                </h6>
                <p class="text-sm text-gray-400">
                    {description}
                </p>
            </div>
            <div class="pb-4 mb-4 border-b">
                <h6 class="mb-2 text-2xl font-semibold leading-normal">
                    Diviertete con todo lo que {title} tiene para ofrecer con Escape
                    Tours
                </h6>

                <p class="text-sm text-gray-400">
                    {resume}
                </p>
            </div>
        </div>
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="flex justify-center">
        <div class="w-full lg:w-3/4 xl:w-1/2">
            <div class="relative" style="padding-top: 60%;">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55917.056654545864!2d-112.01209771547694!3d28.844336377527853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ccfa519710eaa7%3A0xc5d5b33e1b5ec0d0!2sBah%C3%ADa%20Kino%2C%20Sonora!5e0!3m2!1sen!2smx!4v1680590275353!5m2!1sen!2smx"
                    class="absolute top-0 left-0 w-full h-full border-0"
                    loading="lazy"
                />
            </div>
        </div>
    </div>

    <!-- svelte-ignore a11y-missing-attribute -->
</div>
