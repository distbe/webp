/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, Plugin } from 'vite';
import copy from 'rollup-plugin-copy'


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
		copy({
      targets: [
        { src: 'node_modules/wasm-vips/lib/**/*', dest: 'static/node_modules/wasm-vips/lib' },
      ]
    }),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			external: ['/node_modules/wasm-vips/lib/vips-es6.js'],
		},
	},
};

export default config;
