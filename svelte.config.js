import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import sveltePreprocess from "svelte-preprocess";

const config = {
	preprocess: [vitePreprocess(), sveltePreprocess({ postcss: true })],
	kit: { adapter: adapter({ runtime: "edge", regions: "all" }) },
};

export default config;
