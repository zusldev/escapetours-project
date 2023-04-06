<script>
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowRight } from "svelte-hero-icons";
    import { Link } from "svelte-routing";
    import Email from "./Email.svelte";
    import Divisor from "./Divisor.svelte";
    export let title;
    export let description;
    export let imageSrc;
</script>

<div class="bg-gradient-to-b from-[#1111] to-gray-900 px-8 py-10 lg:py-16">
    <Email />
    <Divisor />
    <div class="max-w-7xl mt-16 mx-auto">
        <div class="flex flex-col md:flex-row md:items-center">
            <div class="md:w-1/2 lg:w-5/12">
                <img src={imageSrc} alt={title} class="w-full mb-8 md:mb-0" />
            </div>
            <div class="md:w-1/2 lg:w-7/12 md:pl-12">
                <h2
                    class="text-5xl lg:text-5xl font-extrabold mb-4 text-[#FFD200]"
                >
                    {title}
                </h2>
                <p class="text-lg lg:text-xl text-gray-300 mb-6">
                    {description}
                </p>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <Link
                    to="/tours"
                    class="flex lg:xl:w-1/4 justify-between py-3 px-6 text-lg font-bold bg-yellow-300 text-gray-900 rounded-full hover:bg-yellow-500 transition ease-in-out duration-300"
                    >Explorar <span>
                        <Icon
                            src={ArrowRight}
                            theme="solid"
                            class="h-6 w-6 text-blue-600 ml-2"
                        />
                    </span></Link
                >
            </div>
        </div>
    </div>
</div>
