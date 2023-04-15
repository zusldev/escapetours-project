<script>
  import { crossfade, fade, scale, slide, fly } from "svelte/transition";
  import Contact from "../lib/Contact.svelte";
  import Divisor from "../lib/Divisor.svelte";
  import Footer from "../lib/Footer.svelte";
  import FormContact from "../lib/FormContact.svelte";
  import NavBar from "../lib/NavBar.svelte";
</script>

<NavBar />
<main in:fly={{ y: 200, duration: 1000 }} out:fly={{ y: 500, duration: 800 }}>
  <FormContact />
  <Contact />
  <Footer />
</main>
