import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    ssr: {
        noExternal: ["svelte-hero-icons"],
    },
    define: {
        "process.env": process.env,
    },
});
