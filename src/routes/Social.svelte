<script>
  import {fade} from "svelte/transition";
  import LatestPostInstagram from "../lib/LatestPostInstagram.svelte";
  import NavBar from "../lib/NavBar.svelte";
  import ScrollTop from "../lib/ScrollTop.svelte";
  import Stories from "../lib/Stories.svelte";
  import LatestPostFacebook from "../lib/LatestPostFacebook.svelte";
</script>

<main class="bg-white" in:fade={{ duration: 800 }} out:fade={{ duration: 800 }}>
  <NavBar/>
   <LatestPostFacebook/>
  <Stories/>
  <LatestPostInstagram/>
  <ScrollTop/>
</main>
