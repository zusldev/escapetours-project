<script>
    // @ts-nocheck

    import { Router, Route } from "svelte-routing";
    import Home from "./lib/Home.svelte";
    import AboutTours from "./lib/AboutTours.svelte";
    import ContactUs from "./lib/ContactUs.svelte";
    import SocialNetworkPost from "./lib/SocialNetworkPost.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/tours" component={AboutTours} />
    <Route path="/contact" component={ContactUs} />
    <Route path="/social" component={SocialNetworkPost} />
</Router>
