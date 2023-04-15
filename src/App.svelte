<script>
  // @ts-nocheck
  import {Route, Router} from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import AboutTours from "./routes/AboutTours.svelte";
  import ContactUs from "./routes/ContactUs.svelte";
  import Social from "./routes/Social.svelte";
</script>

<Router>
  <Route component={Home} path="/"/>
  <Route component={AboutTours} path="/tours"/>
  <Route component={ContactUs} path="/contact"/>
  <Route component={Social} path="/social"/>
</Router>
