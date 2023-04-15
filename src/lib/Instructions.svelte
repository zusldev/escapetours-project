<script>
  import { Icon } from "@steeze-ui/svelte-icon";

  import {
    CheckCircle,
    XCircle,
    ShieldCheck,
    PhoneArrowUpRight,
  } from "svelte-hero-icons";
  import Divisor from "./Divisor.svelte";
  import TeamMembers from "./TeamMembers.svelte";

  export const canBring = [
    "Protector solar",
    "Sombrero o gorra",
    "Toalla de playa",
    "Cámara fotográfica",
  ];
  export const cannotBring = [
    "Alcohol",
    "Drogas",
    "Cualquier tipo de arma",
    "Mascotas",
  ];
</script>

<div
  class="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparentdark:opacity-100"
/>
<div class="md:lg:xl:px-40 py-20 bg-gray-900">
  <div class="header mb-10 px-10">
    <h1 class="text-5xl mb-4 font-extrabold text-[#FFD200] dark:text-white">
      Instrucciones generales
    </h1>
    <span class="mt-2 text-xl font-bold text-gray-300"
      >Para que tu viaje sea lo más seguro posible, te pedimos que sigas las
      siguientes instrucciones:</span
    >
  </div>
  <div class="px-10 mt-8 grid grid-cols-1 md:grid-cols-2">
    <div class="canBring">
      <h3 class="text-lg font-bold text-white mb-2">¿Qué puedes llevar?</h3>
      <ul class="text-lg text-gray-400 list-disc list-inside mb-8">
        {#each canBring as item}
          <li class="mb-2 flex">
            <Icon
              src={CheckCircle}
              theme="solid"
              class="h-6 w-6 text-green-400 mr-2"
            />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div class="cantBring">
      <h3 class="text-lg font-bold text-white mb-2">¿Qué no puedes llevar?</h3>
      <ul class="text-lg text-gray-400 list-disc list-inside mb-8">
        {#each cannotBring as item}
          <li class="mb-2 flex">
            <Icon
              src={XCircle}
              theme="solid"
              class="h-6 w-6 text-red-400 mr-2"
            />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="my-8 mt-16 px-10">
    <div class="mb-10">
      <h1 class="text-5xl mb-4 font-extrabold text-[#FFD200] dark:text-white">
        Seguridad
      </h1>
      <span class="mt-2 text-xl font-bold text-gray-300"
        >En Escape Tours, estamos comprometidos con tu seguridad y nos
        enorgullece ser una empresa transparente</span
      >
    </div>
    <h3 class="text-lg font-bold text-white mb-2">COBERTURAS CONTRATADAS</h3>
    <ul class="text-lg text-gray-400 list-disc mb-8">
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Daños Materiales
      </p>
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Robo Total
      </p>
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Responsabilidad Civil por Daños a Terceros Gastos Médicos Conductor y Familiares
      </p>
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Gastos Legales
      </p>
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Responsabilidad Civil Pasajero
      </p>
      <p>
        <span class="inline-block mr-2">
          <Icon
            src={ShieldCheck}
            theme="solid"
            class=" h-6 w-6 text-green-400 "
          />
        </span>
        Muerte del Conductor por Acc. Automovilistico
      </p>
    </ul>
    <p class="text-lg text-gray-400 mb-4">Plazo de Pago: 03 días</p>
    <p class="text-lg text-gray-400 mb-4">SUMA ASEGURADA</p>
    <p class="text-lg text-gray-400 mb-4">DEDUCIBLE</p>
    <p class="text-lg text-gray-400 mb-4">PRIMAS</p>
    <p class="text-lg text-gray-400 mb-4">
      Las coberturas de "RESPONSABILIDAD CIVIL Y "RESPONSABILIDAD CIVIL PASAJERO
      tienen carácter de SEGURO OBLIGATORIO, por lo que no podrán cesar en sus
      efectos, rescindirse ni darse por terminadas con anterioridad a la fecha
      de terminacion de su vigencia y el pago deberá afectarse de contado.
    </p>
  </div>
  <Divisor />
  <div class="memberContainer py-10">
    <TeamMembers />
  </div>

  <div
    class="w-full bg-gradient-to-r from-transparent to-blue-600 rounded-md py-10 px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between items-center"
  >
    <p class="text-white text-center sm:text-left mb-4 sm:mb-0">
      <span class="text-4xl font-medium">¿Quieres saber más del equipo?</span
      ><br />
      <span class="text-lg">¡Ponte en contacto con nosotros!</span>
    </p>
    <button
      class="px-5 py-3 flex font-medium text-black shadow-sm hover:bg-black transition ease-in-out hover:text-white duration-300 bg-yellow-300"
    >
      Agendar una llamada
      <span>
        <Icon
          src={PhoneArrowUpRight}
          theme="solid"
          class="h-6 w-6 text-blue-600 ml-2"
        />
      </span>
    </button>
  </div>
</div>

<style>
  ul.list-disc li::marker {
    display: none;
  }
</style>
