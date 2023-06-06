import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
	preprocess: [vitePreprocess(), sveltePreprocess({ postcss: true })],
	kit: { adapter: adapter({ runtime: "edge" }) }
};

export default config;
