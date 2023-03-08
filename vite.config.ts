import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteBasePath } from './config-shared';

export default defineConfig({
	base: viteBasePath,
	plugins: [sveltekit()]
});
