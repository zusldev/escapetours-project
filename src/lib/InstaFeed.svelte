<script>
    import { Icon } from "@steeze-ui/svelte-icon";
    import {
        Heart,
        MagnifyingGlass,
        Bookmark,
        PaperAirplane,
        ChatBubbleLeftRight,
        ArrowTopRightOnSquare,
    } from "svelte-hero-icons";
    import { onMount } from "svelte";
    import moment from "moment";

    let posts = [];

    onMount(async () => {
        const response = await fetch(
            "https://graph.facebook.com/17841459158447007/media?fields=id,username,caption,media_url,comments_count,like_count,media_type,permalink,timestamp,comments.limit(10)%7Blike_count,username,text,timestamp%7D&access_token=EAAlkIUSqvNwBADXH4rCUsBqN5LkuALAzJ8ydieYZAZAWU13k6Xiz2quUY6iRdTs0keG6iZBWZCncVlSZAGtQFHjqqV1mfUI7XohL2scDO4h0He40x6uCZB2lShcIcBKwCfqwsMZBLc9P0kGi5PKxLbCErKqnZAXB8x9ZAec74eyvVaUZAWSHqiLdTUEkRHCZCp3v7Mi5gC2HyvY7O4aSChVgS6slPx36ZBCRnugZD"
        );
        const json = await response.json();
        posts = json.data;
        console.log(posts);
    });

    function getTimeSince(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const difference = now.getTime() - date.getTime();
        const duration = moment.duration(difference);

        if (duration.asMinutes() < 1) {
            return "hace unos segundos";
        } else if (duration.asHours() < 1) {
            return `hace ${Math.floor(duration.asMinutes())} minutos`;
        } else if (duration.asDays() < 1) {
            return `hace ${Math.floor(duration.asHours())} horas`;
        } else {
            return `hace ${Math.floor(duration.asDays())} días`;
        }
    }
</script>

<!-- component -->
<div class="bg-gradient-to-r from-pink-500 to-orange-500 py-12">
    <div class="textContainer text-center">
        <h1 class="text-4xl font-bold text-white tracking-wide md:text-5xl">
            Últimas publicaciones en Instagram
        </h1>
        <p class="mt-4 text-gray-300 dark:text-gray-400 text-lg">
            Síguenos en Instagram para ver más contenido
        </p>
        <button
            class="bg-white text-blue-600 px-6 py-3 rounded-full mt-8 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >Seguir en Instagram</button
        >
    </div>
</div>

<section class="flex bg-white flex-row flex-wrap mx-auto">
    <!-- Card Component for image post -->
    {#each posts as post}
        <!-- only images-->
        {#if post.media_type == "IMAGE" || post.media_type == "CAROUSEL_ALBUM"}
            <!-- content here -->
            <div
                class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
            >
                <div
                    class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
                >
                    <div class="md:flex-shrink-0">
                        <img
                            src={post.media_url}
                            alt="Blog Cover"
                            class="object-fill w-full rounded-lg rounded-b-none"
                        />
                    </div>
                    <div
                        class="flex items-center justify-between px-4 py-2 overflow-hidden"
                    >
                        <span
                            class="text-xs flex font-medium text-blue-600 uppercase"
                        >
                            <a
                                href={post.permalink}
                                class="flex"
                                target="_blank"
                            >
                                Instagram post
                                <Icon
                                    class="w-4 h-4 ml-1"
                                    src={ArrowTopRightOnSquare}
                                    color="currentColor"
                                />
                            </a>
                        </span>
                        <div class="flex flex-row items-center">
                            <div
                                class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                            >
                                <Icon
                                    class="w-4 h-4 mr-1"
                                    src={Heart}
                                    color="currentColor"
                                />
                                <span>{post.like_count}</span>
                            </div>

                            <div
                                class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                            >
                                <Icon
                                    class="w-4 h-4 mr-1"
                                    src={ChatBubbleLeftRight}
                                    color="currentColor"
                                />
                                <span>{post.comments_count}</span>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-300" />
                    <div
                        class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto"
                    >
                        <a
                            href={post.permalink}
                            target="_blank"
                            class="hover:underline"
                        >
                            <h2
                                class="text-2xl font-bold tracking-normal text-gray-800"
                            >
                                {post.caption}
                            </h2>
                        </a>
                    </div>
                    <hr class="border-gray-300" />
                    <!--COMENTARIOS - MOSTRAR LOS PRIMEROS 2 -->
                    <div>
                        <!-- Comentarios -->
                        <div class="space-y-4 bg-gray-100">
                            <!-- Mostrar solo los dos primeros comentarios -->
                            {#if post.comments?.data?.length > 0}
                                <!-- content here -->
                                {#each post.comments?.data?.slice(0, 2) as comment}
                                    <div class="bg-gray-100 rounded-lg p-4">
                                        <div class="flex items-center">
                                            <div class="ml-3">
                                                <p
                                                    class="text-sm font-medium text-gray-900"
                                                >
                                                    {comment.username}
                                                </p>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    {getTimeSince(
                                                        comment.timestamp
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-sm text-gray-700">
                                                {comment.text}
                                            </p>
                                        </div>
                                    </div>
                                {/each}

                                <!-- Enlace a la publicación completa -->
                                {#if post.comments_count > 2}
                                    <a
                                        href={post.permalink}
                                        target="_blank"
                                        class="block text-sm font-medium text-blue-600 hover:text-blue-500 ml-4 mb-2 p-2"
                                    >
                                        Ver {post.comments_count} comentarios
                                    </a>
                                {/if}
                            {/if}
                        </div>
                    </div>

                    <hr class="border-gray-300" />
                    <section class="px-4 py-2 mt-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center flex-1">
                                <img
                                    class="object-cover h-10 rounded-full"
                                    src="https://ik.imagekit.io/escapetours/LogoEscapeTours.png?updatedAt=1680559962943"
                                    alt="Avatar"
                                />
                                <div class="flex flex-col mx-2">
                                    <a
                                        href={post.permalink}
                                        class="font-semibold text-gray-700 hover:underline"
                                    >
                                        {post.username}
                                    </a>
                                    <span class="mx-1 text-xs text-gray-600"
                                        >{getTimeSince(post.timestamp)}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        {/if}
    {/each}
</section>
<!--SECTION TO VIDEOS AND REELS-->
<div class="bg-gradient-to-r from-pink-500 to-orange-500 py-12">
    <div class="textContainer text-center">
        <h1 class="text-4xl font-bold text-white tracking-wide md:text-5xl">
            Últimos videos/reels en Instagram
        </h1>
        <p class="mt-4 text-gray-300 dark:text-gray-400 text-lg">
            Síguenos en Instagram para ver más contenido
        </p>
        <button
            class="bg-white text-blue-600 px-6 py-3 rounded-full mt-8 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >Seguir en Instagram</button
        >
    </div>
</div>
<section class="flex flex-row bg-white flex-wrap mx-auto">
    {#each posts as post}
        <!-- content here -->

        {#if post.media_type == "VIDEO"}
            <div
                class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
            >
                <div
                    class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
                >
                    <div class="md:flex-shrink-0">
                        <!-- svelte-ignore a11y-media-has-caption -->
                        <div class="relative w-full">
                            <video
                                src={post.media_url}
                                class="object-fill w-full rounded-lg rounded-b-none"
                            />
                        </div>
                    </div>
                    <div
                        class="flex items-center justify-between px-4 py-2 overflow-hidden"
                    >
                        <span
                            class="text-xs font-medium text-blue-600 uppercase"
                        >
                            <a
                                href={post.permalink}
                                class="flex"
                                target="_blank"
                            >
                                Instagram post
                                <Icon
                                    class="w-4 h-4 ml-1"
                                    src={ArrowTopRightOnSquare}
                                    color="currentColor"
                                />
                            </a>
                        </span>
                        <div class="flex flex-row items-center">
                            <div
                                class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                            >
                                <Icon
                                    class="w-4 h-4 mr-1"
                                    src={Heart}
                                    color="currentColor"
                                />
                                <span>{post.like_count}</span>
                            </div>

                            <div
                                class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                            >
                                <Icon
                                    class="w-4 h-4 mr-1"
                                    src={ChatBubbleLeftRight}
                                    color="currentColor"
                                />
                                <span>{post.comments_count}</span>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-300" />
                    <div
                        class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto"
                    >
                        <a
                            href={post.permalink}
                            target="_blank"
                            class="hover:underline"
                        >
                            <h2
                                class="text-2xl font-bold tracking-normal text-gray-800"
                            >
                                {post.caption}
                            </h2>
                        </a>
                    </div>
                    <hr class="border-gray-300" />
                    <!--COMENTARIOS - MOSTRAR LOS PRIMEROS 2 -->
                    <div>
                        <!-- Comentarios -->
                        <div class="space-y-4">
                            <!-- Mostrar solo los dos primeros comentarios -->
                            {#if post.comments?.data?.length > 0}
                                <!-- content here -->
                                {#each post.comments?.data?.slice(0, 2) as comment}
                                    <div class="bg-gray-100 rounded-lg p-4">
                                        <div class="flex items-center">
                                            <div class="ml-3">
                                                <p
                                                    class="text-sm font-medium text-gray-900"
                                                >
                                                    {comment.username}
                                                </p>
                                                <p
                                                    class="text-sm text-gray-500"
                                                >
                                                    {getTimeSince(
                                                        comment.timestamp
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <p class="text-sm text-gray-700">
                                                {comment.text}
                                            </p>
                                        </div>
                                    </div>
                                {/each}

                                <!-- Enlace a la publicación completa -->
                                {#if post.comments_count > 2}
                                    <a
                                        href={post.permalink}
                                        target="_blank"
                                        class="block text-sm font-medium text-blue-600 hover:text-blue-500 ml-4 mb-2 p-2"
                                    >
                                        Ver {post.comments_count} comentarios
                                    </a>
                                {/if}
                            {/if}
                        </div>
                    </div>

                    <hr class="border-gray-300" />
                    <section class="px-4 py-2 mt-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center flex-1">
                                <img
                                    class="object-cover h-10 rounded-full"
                                    src="https://ik.imagekit.io/escapetours/LogoEscapeTours.png?updatedAt=1680559962943"
                                    alt="Avatar"
                                />
                                <div class="flex flex-col mx-2">
                                    <a
                                        href={post.permalink}
                                        class="font-semibold text-gray-700 hover:underline"
                                    >
                                        {post.username}
                                    </a>
                                    <span class="mx-1 text-xs text-gray-600"
                                        >{getTimeSince(post.timestamp)}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        {/if}
    {/each}
</section>
