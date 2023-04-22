<script>
  import { fade } from "svelte/transition";
  import LatestPostInstagram from "../lib/LatestPostInstagram.svelte";
  import NavBar from "../lib/NavBar.svelte";
  import ScrollTop from "../lib/ScrollTop.svelte";
  import Stories from "../lib/Stories.svelte";
  import LatestPostFacebook from "../lib/LatestPostFacebook.svelte";

  export let location; // svelte-routing issue
</script>

<main class="bg-white" transition:fade>
  <NavBar />
  <LatestPostFacebook />
  <Stories />
  <LatestPostInstagram />
  <ScrollTop />
</main>
