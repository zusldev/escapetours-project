<script>
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Map } from "svelte-hero-icons";
  export let title;
  export let description;
  export let resume;
  export let imageWide;
  export let altImgWide;
  export let imageTwo;
  export let altImgTwo;
  export let imageThree;
  export let altImgThree;
  export let location;
  export let locationDescription;
  export let latitude;
  export let longitude;
  export let weather;
  export let map;
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
      a {title}! Déjate sorprender por sus hermosas playas, aguas cristalinas y
      exquisita gastronomía local. ¡No te lo pierdas!
    </p>
  </div>
  <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
    <div class="grid grid-cols-2 gap-5">
      <img
        class="object-cover object-bottom w-full h-56 col-span-2 rounded shadow-lg hover:scale-110 transition duration-300 ease-in-out"
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
          Diviertete con todo lo que {title} tiene para ofrecer con Escape Tours
        </h6>

        <p class="text-sm text-gray-400">
          {resume}
        </p>
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- component -->
  <section class="dark:bg-gray-900 py-10">
    <div class="container px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h1
        class="text-3xl lg:text-4xl font-semibold text-yellow-300 mb-4 flex items-center"
      >
        <span class="mr-2">
          <Icon class="w-6 h-6 text-yellow-300" src={Map} theme="solid" />
        </span>
        Ubicación
      </h1>

      <div class="mt-8 lg:flex lg:items-center">
        <div class="lg:w-1/2 lg:mr-6">
          <iframe
            src={map}
            width="100%"
            height="450"
            style="border:0;"
            loading="lazy"
          />
        </div>

        <div class="lg:w-1/2">
          <h2 class="text-2xl font-bold mb-2">{location}</h2>
          <p class="text-gray-400 mb-4">{locationDescription}</p>
          <ul class="text-white mb-4">
            <li class="">
              <strong class="text-yellow-300">Latitud:</strong>
              {latitude}
            </li>
            <li>
              <strong class="text-yellow-300">Longitud:</strong>
              {longitude}
            </li>
            <li>
              <strong class="text-yellow-300">Clima:</strong>
              {weather}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- svelte-ignore a11y-missing-attribute -->
</div>
