/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, Plugin } from 'vite';


const viteServerConfig: Plugin = {
	name: 'log-request-middleware',
	configureServer(server) {
		server.middlewares.use((req, res, next) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Methods", "GET");
			res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
			res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
			next();
		});
	}
};

const config: UserConfig = {
	plugins: [
		viteServerConfig,
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
};

export default config;
