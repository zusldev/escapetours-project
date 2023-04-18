import "./app.postcss";
import App from "./App.svelte";
import "./utils/scrollToTopProxy";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
