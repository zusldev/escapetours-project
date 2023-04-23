<script>
  import { fly } from "svelte/transition";
  import Contact from "../lib/Contact.svelte";
  import Footer from "../lib/Footer.svelte";
  import FormContact from "../lib/FormContact.svelte";
  import NavBar from "../lib/NavBar.svelte";

  export let location; // svelte-routing issue
</script>

<main in:fly={{ y: 200, duration: 1000 }} out:fly={{ y: 500, duration: 800 }}>
  <NavBar />
  <FormContact />
  <Contact />
  <Footer />
</main>
