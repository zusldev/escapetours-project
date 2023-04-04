<script>
    import { Router, Route } from "svelte-routing";
    import Home from "./lib/Home.svelte";
    import AboutTours from "./lib/AboutTours.svelte";
    import ContactUs from "./lib/ContactUs.svelte";
    import { fly } from "svelte/transition";
</script>

<Router>
    <Route path="/" component={Home}/>
    <Route path="/tours" component={AboutTours} />
    <Route path="/contact" component={ContactUs} />
</Router>
