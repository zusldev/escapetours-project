<script>
    import NavBar from "./NavBar.svelte";
    import Body from "./Body.svelte";
    import Email from "./Email.svelte";
    import Presentation from "./Presentation.svelte";
    import presentation from "../content/presentation";
    import Instructions from "./Instructions.svelte";
    import FAQ from "./FAQ.svelte";
    import Contact from "./Contact.svelte";
    import Footer from "./Footer.svelte";
    import ContactUs from "./ContactUs.svelte";
</script>

<div>
    <NavBar />
    <Body />
</div>
<div class="items-center justify-center mx-auto">
    <Email />
</div>
<Presentation
    title={presentation.title}
    description={presentation.description}
    imageSrc={presentation.imageSrc}
/>
<Instructions />
<FAQ />

<div class="bottom-0 w-full">
    <Footer />
</div>
