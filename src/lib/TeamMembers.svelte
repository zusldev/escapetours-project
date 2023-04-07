<script>
    import membersData from "../content/membersData";
    import { Icon } from "@steeze-ui/svelte-icon";

    import { ShieldCheck } from "svelte-hero-icons";
</script>

<link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
/>

<!-- Page Container -->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col">
        <div class="flex flex-col mt-8">
            <!-- Meet the Team -->
            <div class="container max-w-7xl px-4">
                <!-- Section Header -->
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                        <!-- Header -->
                        <h1 class="text-[#FFD200] text-5xl font-bold mb-8">
                            Conoce a nuestro equipo
                        </h1>

                        <!-- Description -->
                        <p class="text-gray-300 text-lg font-bold">
                            Nuestro equipo está conformado por personas
                            comprometidas con el bienestar de los viajeros.
                        </p>
                    </div>
                </div>

                <!-- Team Members -->
                <div class="flex flex-wrap justify-center gap-10">
                    <!-- Members -->
                    {#each membersData as member}
                        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-8">
                            <div
                                class="rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
                            >
                                <!-- Avatar -->
                                <img
                                    class="w-full h-72 object-cover object-top"
                                    src={member.image}
                                    alt={member.name}
                                />

                                <!-- Details -->
                                <div class="px-6 py-4">
                                    <!-- Name -->
                                    <h1
                                        class="text-xl flex text-gray-300 font-bold mb-2"
                                    >
                                        {member.name}
                                        <span>
                                            <Icon
                                                src={ShieldCheck}
                                                theme="solid"
                                                class="h-6 w-6 text-blue-400 ml-2"
                                            />
                                        </span>
                                    </h1>

                                    <!-- Title -->
                                    <div
                                        class="text-[#FFD200] font-bold text-sm mb-4"
                                    >
                                        {member.role}
                                    </div>

                                    <!-- Social Icons -->
                                    <div
                                        class="flex items-center justify-center mb-4"
                                    >
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            class="text-indigo-500 hover:text-indigo-600 mx-2"
                                        >
                                            <i
                                                class="mdi mdi-linkedin h-6 w-6"
                                            />
                                        </a>
                                        <a
                                            href={member.facebook}
                                            target="_blank"
                                            class="text-indigo-500 hover:text-indigo-600 mx-2"
                                        >
                                            <i
                                                class="mdi mdi-facebook h-6 w-6"
                                            />
                                        </a>

                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            class="text-blue-500 hover:text-blue-600 mx-2"
                                        >
                                            <i
                                                class="mdi mdi-twitter h-6 w-6"
                                            />
                                        </a>

                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            class="text-orange-500 hover:text-orange-600 mx-2"
                                        >
                                            <i
                                                class="mdi mdi-instagram h-6 w-6"
                                            />
                                        </a>
                                    </div>

                                    <!-- Bio -->
                                    <p class="text-gray-300 text-base">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
