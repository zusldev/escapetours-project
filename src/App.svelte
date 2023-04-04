<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./lib/Home.svelte";
    import AboutTours from "./lib/AboutTours.svelte";
    import ContactUs from "./lib/ContactUs.svelte";
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    <Route path="/" component={Home} />
    <Route path="/tours" component={AboutTours} />
    <Route path="/contact" component={ContactUs} />
</Router>
