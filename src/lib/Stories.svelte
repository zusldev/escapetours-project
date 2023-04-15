<script>
  import getTimeSince from "../static files/timeSince.js";
  import {onMount} from "svelte";
  import {getInstagramStories} from "../api/getInstagramStories.ts";

  const escapeToursLogo =
    "https://ik.imagekit.io/escapetours/LogoEscapeTours.png?updatedAt=1680559962943";

  let showModal = false;
  let currentStory = null;

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
  // deposit stories in stories variable when component is mounted
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
                  src={escapeToursLogo}
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
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      style="display: {showModal ? 'block' : 'none'};"
      on:click={closeModal}
      on:keydown={closeModal}
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"/>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <div class="relative h-screen">
                {#if currentStory && currentStory.media_type === "IMAGE"}
                  <!-- mostrar imagen -->
                  <img
                    class="h-full w-full object-cover"
                    src={currentStory.media_url}
                    alt={currentStory.username}
                  />
                {:else if currentStory && currentStory.media_type === "VIDEO"}
                  <!-- mostrar video -->
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video
                    class="h-full w-full object-cover"
                    src={currentStory.media_url}
                    controls
                  />
                {:else}
                  <!-- mostrar mensaje de error -->
                  <p class="text-center text-gray-500">
                    No se pudo cargar la historia
                  </p>
                {/if}
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
              on:click={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
