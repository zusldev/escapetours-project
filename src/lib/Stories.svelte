<script lang="ts">
  import getTimeSince from "../utils/timeSince.js";
  import { onMount } from "svelte";
  import { getInstagramStories } from "../api/getInstagramStories.ts";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Play, XMark } from "svelte-hero-icons";

  const escapeToursLogo =
    "https://ik.imagekit.io/escapetours/LogoEscapeTours.png?updatedAt=1680559962943";

  let showModal = false;
  let currentStory = null;

  // close modal

  addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  addEventListener("closeModal", () => {
    closeModal();
  });

  // play story modal
  let video;
  let playButtonVisible = true;

  function togglePlay() {
    if (video.paused) {
      video.play();
      playButtonVisible = false;
    } else {
      video.pause();
      playButtonVisible = true;
    }
  }

  // Modal functions

  function openModal(story) {
    currentStory = story;
    showModal = true;
  }

  function closeModal() {
    currentStory = null;
    showModal = false;
  }

  function handleClick(event, story) {
    event.preventDefault();
    openModal(story);
  }

  // get stories
  let stories = [];
  // deposit stories when component is mounted
  onMount(async () => {
    stories = await getInstagramStories();
  });
</script>

{#if stories.length > 0}
  <div class="max-w-full mx-auto p-8 overflow-x-auto whitespace-nowrap">
    <h2
      class="sm:text-lg sm:text-pink-700 leading-snug tracking-widest uppercase font-semibold"
    >
      Nuestras ultimas historias
    </h2>
    <p class="text-3xl font-extrabold leading-none text-gray-800 py-4">
      Instagram
    </p>

    <ul class="flex space-x-6 font-serif">
      {#each stories as story}
        {#if story.media_url}
          <!-- content here -->
          <li class="flex-shrink-0 flex flex-col items-center space-y-1">
            <div
              class="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-1 rounded-full"
            >
              <!-- svelte-ignore a11y-missing-attribute -->
              <a
                class=" bg-white block rounded-full p-1 hover:-rotate-6 transform transition"
                on:click={(event) => handleClick(event, story)}
                on:keydown={(event) => handleClick(event, story)}
              >
                <!-- svelte-ignore a11y-media-has-caption -->
                <img
                  class="h-24 w-24 rounded-full"
                  src={story.thumbnail_url ? story.thumbnail_url : escapeToursLogo}
                  alt={story.caption}
                />
              </a>
            </div>
            <p class="text-md text-gray-500">{story.username}</p>
            <p class="text-sm text-gray-500">
              {getTimeSince(story.timestamp)}
            </p>
          </li>
        {/if}
      {/each}
    </ul>
    <!--MODAL-->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="fixed z-10 inset-0"
      style="display: {showModal ? 'block' : 'none'};"
    >
      <div
        class="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-gray-700 transition-all duration-300"
          />
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">&#8203;</span
        >
        <div
          class="inline-block align-bottom px-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="text-center sm:mt-5">
              <div class="story-container rounded-lg">
                {#if currentStory && currentStory.media_type === "IMAGE"}
                  <!-- mostrar imagen -->
                  <img
                    class="h-full w-full object-contain rounded-lg"
                    src={currentStory.media_url}
                    alt={currentStory.username}
                  />
                  <div class="info">
                    <a target="_blank" href={currentStory.permalink}>
                      {currentStory.username}
                    </a>

                    <p>
                      {getTimeSince(currentStory.timestamp)}
                    </p>
                  </div>
                {:else if currentStory && currentStory.media_type === "VIDEO"}
                  <!-- mostrar video -->
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video
                    class="h-full w-full object-contain rounded-lg"
                    src={currentStory.media_url}
                    bind:this={video}
                    on:click={togglePlay}
                  />
                  {#if playButtonVisible}
                    <div class="play-button" on:click={togglePlay}>
                      <Icon
                        class="text-white w-24 h-24 hover:text-gray-200 cursor-pointer"
                        src={Play}
                        theme="solid"
                      />
                    </div>
                  {/if}
                  <div class="info justify-between">
                    <a target="_blank" href={currentStory.permalink}>
                      {currentStory.username}
                    </a>
                    <p>
                      {getTimeSince(currentStory.timestamp)}
                    </p>
                  </div>
                {:else}
                  <!-- mostrar mensaje de error -->
                  <p class="text-center text-gray-500">
                    No se pudo cargar la historia
                  </p>
                {/if}
              </div>
              <span
                class="absolute rounded-lg top-0 right-0"
                id="closeModal"
                on:click={closeModal}
              >
                <Icon
                  class="text-white w-10 h-10 hover:text-gray-200 cursor-pointer"
                  src={XMark}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .story-container {
    height: 90vh;
    overflow: hidden;
    position: relative;
  }
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    .story-container {
      height: 100vh;
    }
  }
</style>
