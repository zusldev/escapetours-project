<script>
  import NavBar from "../lib/NavBar.svelte";
  import Body from "../lib/Body.svelte";
  import Presentation from "../lib/Presentation.svelte";
  import presentation from "../content/presentation.js";
  import Instructions from "../lib/Instructions.svelte";
  import FAQ from "../lib/FAQ.svelte";
  import Footer from "../lib/Footer.svelte";
  import { fade, fly } from "svelte/transition";
  import ScrollTop from "../lib/ScrollTop.svelte";

  export let location; // svelte-routing issue
</script>

<main transition:fade>
  <NavBar />
  <div>
    <Body />
  </div>
  <div class="">
    <Presentation
      description={presentation.description}
      imageSrc={presentation.imageSrc}
      title={presentation.title}
    />
  </div>

  <Instructions />

  <section id="faq">
    <FAQ />
  </section>
  <ScrollTop />
  <div class="bottom-0 w-full">
    <Footer />
  </div>
</main>
