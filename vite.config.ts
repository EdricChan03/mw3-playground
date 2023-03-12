import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const isCi = !!process.env.CI;
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'mw3-playground';
const viteBasePath = isCi ? `/${repoName}/` : '/';

export default defineConfig({
	base: viteBasePath,
	plugins: [sveltekit()]
});
