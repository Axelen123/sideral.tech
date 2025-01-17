import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: extensions,
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: extensions
		})],

	kit: {
		adapter: adapter()
	}
};

export default config;
