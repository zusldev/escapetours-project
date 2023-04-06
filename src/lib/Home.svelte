<script>
    import NavBar from "./NavBar.svelte";
    import Body from "./Body.svelte";
    import Email from "./Email.svelte";
    import Presentation from "./Presentation.svelte";
    import presentation from "../content/presentation";
    import Instructions from "./Instructions.svelte";
    import FAQ from "./FAQ.svelte";
    import Footer from "./Footer.svelte";
    import { fly } from "svelte/transition";
</script>

<NavBar />
<main in:fly={{ y: 200, duration: 800 }} out:fly={{ y: 500, duration: 800 }}>
    <div>
        <Body />
    </div>
    
    <Presentation
        title={presentation.title}
        description={presentation.description}
        imageSrc={presentation.imageSrc}
    />
    <Instructions />
    <section id="faq">
        <FAQ />
    </section>

    <div class="bottom-0 w-full">
        <Footer />
    </div>
</main>
