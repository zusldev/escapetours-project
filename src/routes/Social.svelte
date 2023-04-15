<script>
  import { fade, fly } from "svelte/transition";
  import FollowUs from "../lib/FollowUs.svelte";
  import LatestPostInstagram from "../lib/LatestPostInstagram.svelte";
  import LatestPostFacebook from "../lib/LastestPostFacebook.svelte";
  import NavBar from "../lib/NavBar.svelte";
  import Stories from "../lib/Stories.svelte";
  import ScrollTop from "../lib/ScrollTop.svelte";
</script>

<main class="bg-white" in:fade={{ duration: 800 }} out:fade={{ duration: 800 }}>
  <NavBar />
  <LatestPostFacebook />
  <Stories />
  <LatestPostInstagram />
  <ScrollTop />
</main>
