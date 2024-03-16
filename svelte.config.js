import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess:[ vitePreprocess({
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	mdsvex({
		extensions: ['.md', '.svx'],
		// <https://mdsvex.com/docs#layouts>
		// layout: {
		//   // _: './src/routes/post.svelte'
		//   blog: './src/routes/post.svelte'
		// }
	  }),
	],
	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
