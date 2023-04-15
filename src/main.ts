import "./app.postcss";
import App from "./App.svelte";
import "./static files/scrollToTopProxy";

const app = new App({
    target: document.getElementById("app"),
});

export default app;
