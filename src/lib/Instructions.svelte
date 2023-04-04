<script>
    import { Icon } from "@steeze-ui/svelte-icon";

    import {
        CheckCircle,
        XCircle,
        ShieldCheck,
        PhoneArrowUpRight,
    } from "svelte-hero-icons";
    import Divisor from "./Divisor.svelte";

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
    export const teamMembers = [
        {
            name: "David Zuñiga",
            role: "Fundador",
            bio: "David es el fundador de la empresa. A lo largo de su vida ha recorrido gran parte de Sonora y ha aprendido mucho sobre la cultura y la historia de la región.",
            image: "https://ik.imagekit.io/escapetours/Gallery_tour/1679853108191.jpg?updatedAt=1680637374247",
        },
        {
            name: "Javier Valenzuela",
            role: "Fundador",
            bio: "Javier es el fundador de la empresa. A través de sus viajes ha aprendido mucho sobre la cultura y la historia de la región. Es un experto en la región y en la conducción de vehículos turísticos.",
            image: "https://ik.imagekit.io/escapetours/Gallery_tour/1679853108191.jpg?updatedAt=1680637374247",
        },
        {
            name: "Diana Félix",
            role: "Fundadora",
            bio: "Diana es también una de las fundadoras de la empresa. En sus viajes ha aprendido mucho sobre la cultura y la historia de la región. Le encanta la naturaleza y la aventura.",
            image: "https://ik.imagekit.io/escapetours/Gallery_tour/1679853108191.jpg?updatedAt=1680637374247",
        },
    ];
</script>

<div
    class="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparentdark:opacity-100"
/>
<div class="px-3 md:lg:xl:px-40 py-20 bg-gray-900">
    <div class="header mb-24">
        <h1 class="text-5xl font-extrabold text-[#FFD200] dark:text-white">
            Instrucciones generales
            <h3>
                <span class="text-2xl font-bold text-gray-400"
                    >Para que tu viaje sea lo más seguro posible, te pedimos que
                    sigas las siguientes instrucciones:</span
                >
            </h3>
        </h1>
    </div>
    <div class="mt-8">
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

        <h3 class="text-lg font-bold text-white mb-2">
            ¿Qué no puedes llevar?
        </h3>
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
    <div class="my-8 mt-20">
        <h1
            class="text-4xl mb-20 font-extrabold text-[#FFD200] dark:text-white"
        >
            Seguridad
            <h3>
                <span class="text-2xl font-bold text-gray-400"
                    >En Escape Tours, estamos comprometidos con tu seguridad y
                    nos enorgullece ser una empresa transparente</span
                >
            </h3>
        </h1>
        <h3 class="text-lg font-bold text-white mb-2">
            COBERTURAS CONTRATADAS
        </h3>
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
                Responsabilidad Civil por Daños a Terceros Gastos Médicos Conductor
                y Familiares
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
            Las coberturas de "RESPONSABILIDAD CIVIL Y "RESPONSABILIDAD CIVIL
            PASAJERO tienen carácter de SEGURO OBLIGATORIO, por lo que no podrán
            cesar en sus efectos, rescindirse ni darse por terminadas con
            anterioridad a la fecha de terminacion de su vigencia y el pago
            deberá afectarse de contado.
        </p>
    </div>
    <Divisor />
    <section class="py-8 flex justify-center items-center">
        <div class="container mx-auto px-2">
            <h2 class="text-4xl font-bold text-white text-center mb-8">
                Nuestro Equipo
            </h2>

            <div class="flex flex-wrap mx-auto">
                {#each teamMembers as member}
                    <div
                        class="w-full mx-auto sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4"
                    >
                        <div class="bg-[#F4F4F4] shadow-md rounded-lg p-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                class="w-full h-auto bg-cover rounded-lg mb-4"
                            />
                            <h3
                                class="text-lg flex font-medium text-gray-900 mb-2"
                            >
                                {member.name}
                                <span>
                                    <Icon
                                        src={ShieldCheck}
                                        theme="solid"
                                        class="h-6 w-6 text-blue-400 ml-2"
                                    />
                                </span>
                            </h3>

                            <p class="text-gray-700 mb-2">{member.role}</p>
                            <p class="text-gray-600">{member.bio}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <div
        class="w-full bg-indigo-600 rounded-md py-10 px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between items-center"
    >
        <p class="text-white text-center sm:text-left mb-4 sm:mb-0">
            <span class="text-4xl font-medium"
                >¿Quieres saber más del equipo?</span
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
