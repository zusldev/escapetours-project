<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./lib/Home.svelte";
    import AboutTours from "./lib/AboutTours.svelte";
    import ContactUs from "./lib/ContactUs.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/tours" component={AboutTours} />
    <Route path="/contact" component={ContactUs} />
    <!-- <Route path="/tours" component={Tours} /> -->
    <!-- <Route path="/contact" component={Contact} /> -->
</Router>
