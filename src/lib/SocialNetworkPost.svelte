<script>
    import { fade, fly } from "svelte/transition";
    import FollowUs from "./FollowUs.svelte";
    import InstaFeed from "./InstaFeed.svelte";

    import LastPost from "./LastPost.svelte";
    import NavBar from "./NavBar.svelte";
    import Stories from "./Stories.svelte";
</script>

<main class="bg-white" in:fade={{ duration: 800 }} out:fade={{ duration: 800 }}>
    <NavBar />
    <LastPost />
    <Stories />
    <InstaFeed />
</main>
