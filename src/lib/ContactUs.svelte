<script>
    import { crossfade, fade, scale, slide, fly } from "svelte/transition";
    import Contact from "./Contact.svelte";
    import Divisor from "./Divisor.svelte";
    import Footer from "./Footer.svelte";
    import FormContact from "./FormContact.svelte";
    import NavBar from "./NavBar.svelte";
</script>

<NavBar />
<main in:fly={{ y: 200, duration: 1000 }} out:fly={{ y: 500, duration: 800 }}>
    <FormContact />
    <Contact />
    <Footer />
</main>
