<script lang="ts">
  import {Icon} from "@steeze-ui/svelte-icon";
  import {ArrowTopRightOnSquare, ChatBubbleLeftRight, Heart,} from "svelte-hero-icons";
  import getTimeSince from "../static files/timeSince.js";
  import Swiper from "swiper";
  import "swiper/css/bundle";
  import {onMount} from "svelte";
  import {getInstagramFeed, getPosts, getVideoPosts} from "../api/getInstagramFeed.ts";


  let loading = true;
  let posts: any[] = [];
  let videoPosts: any[] = [];

  onMount(async () => {
    try {
      await getInstagramFeed();
      posts = await getPosts();
      videoPosts = await getVideoPosts();
      loading = false;
    } catch (error) {
      console.log(error);
    }
  });


  //swiper
  let swiper = null;

  //swiper init function config
  function initSwiper() {
    swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      mousewheel: {
        sensitivity: 1,
      },
    });
  }

  // swiper
  $: initSwiper();
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
    <a href="https://www.instagram.com/escapetours.mx" target="_blank">
      <button
        class="bg-white text-blue-600 px-6 py-3 rounded-full mt-8 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >Seguir en Instagram
      </button
      >
    </a>
  </div>
</div>

<section
  class="flex bg-gradient-to-r from-pink-500 to-orange-500 flex-row flex-wrap mx-auto"
>
  <!-- Card Component for image post -->
  {#each posts.slice(0, 6) as post}
    <!-- only images-->
    {#if post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"}
      <!---->

      <div
        class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
      >
        <div
          class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
        >
          <div class="md:flex-shrink-0">
            {#if post.media_type === "IMAGE"}
              <!-- content here -->
              <img
                src={post.media_url}
                alt="Blog Cover"
                class="object-fill w-full border-l-4 border-r-4 border-t-4 rounded-lg rounded-b-none"
              />
            {/if}
            {#if post.media_type === "CAROUSEL_ALBUM"}
              <div class="swiper-container">
                <div class="swiper-wrapper overflow-x-scroll">
                  {#each post.children.data as item}
                    <div class="swiper-slide relative">
                      {#if item.media_type === "IMAGE"}
                        <img
                          src={item.media_url}
                          alt="Blog Cover"
                          class="object-fill w-full border-l-4 border-r-4 border-t-4 rounded-lg rounded-b-none"
                        />
                      {/if}
                      {#if item.media_type === "VIDEO"}
                        <!-- svelte-ignore a11y-media-has-caption -->
                        <video
                          src={item.media_url}
                          class="object-fill w-full border-l-4 border-r-4 border-t-4 rounded-lg rounded-b-none"
                          controls></video>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
          <div
            class="flex items-center justify-between px-4 py-2 overflow-hidden"
          >
            <span class="text-xs flex font-medium text-blue-600 uppercase">
              <a href={post.permalink} class="flex" target="_blank">
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
                <Icon class="w-4 h-4 mr-1" src={Heart} color="currentColor"/>
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

          <hr class="border-gray-300"/>
          <div
            class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto"
          >
            {#if post.caption != null}
              <!-- content here -->
              <p class="text-sm text-gray-700">
                {post.caption.substring(0, 150).trim()}
                {#if post.caption.length > 150}
                  <a href={post.permalink} class="text-blue-500 hover:underline"
                  >...ver más</a
                  >
                {/if}
              </p>
            {/if}
          </div>
          <hr class="border-gray-300"/>
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
                        <p class="text-sm font-medium text-gray-900">
                          {comment.username}
                        </p>
                        <p class="text-sm text-gray-500">
                          {getTimeSince(comment.timestamp)}
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

          <hr class="border-gray-300"/>
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
<div class="bg-gradient-to-r from-pink-500 to-orange-500 py-16">
  <div class="textContainer text-center">
    <h1 class="text-4xl font-bold text-white tracking-wide md:text-5xl">
      Últimos videos/reels en Instagram
    </h1>
    <p class="mt-4 text-gray-300 dark:text-gray-400 text-lg">
      Síguenos en Instagram para ver más contenido
    </p>
  </div>
</div>
<section
  class="flex flex-row bg-gradient-to-r from-pink-500 to-orange-500 flex-wrap mx-auto"
>
  {#each videoPosts.slice(0, 3) as post}
    <!-- content here -->

    {#if post.media_type === "VIDEO"}
      <div
        class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
      >
        <div
          class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
        >
          <div class="md:flex-shrink-0">
            <video
              src={post.media_url}
              class="object-contain w-full border-l-4 border-r-4 border-t-4 rounded-lg rounded-b-none"
              id="video"
              muted
              autoplay
              loop
              playsinline
              preload="auto"
              on:click={() => {}}></video>
          </div>
          <div
            class="flex flex-col justify-between md:flex-row md:justify-between md:items-center w-full"
          >
            <div
              class="flex items-center justify-between px-4 py-2 overflow-hidden"
            >
              <span class="text-xs font-medium text-blue-600 uppercase">
                <a href={post.permalink} class="flex" target="_blank">
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
                  <Icon class="w-4 h-4 mr-1" src={Heart} color="currentColor"/>
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
            <div>
              <hr class="border-gray-300"/>
              {#if post.comments_count > 0}
                <!-- content here -->
                <a
                  href={post.permalink}
                  target="_blank"
                  class="block text-sm font-medium text-blue-600 hover:text-blue-500 ml-4 mb-2 p-2"
                >
                  Ver {post.comments_count} comentarios
                </a>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/each}
</section>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    ::-moz-scrollbar {
        width: 10px;
    }

    ::-moz-scrollbar-track {
        background-color: #f1f1f1;
    }

    ::-moz-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }
</style>
