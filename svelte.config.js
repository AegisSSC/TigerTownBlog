import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'


import { escapeSvelte, mdsvex } from 'mdsvex'
import { createHighlighter } from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images' 
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'


/**@type {import('mdsvex).MdsvexOptions}*/
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	}, 
	highlight: { 
		highlighter : async (code, lang  = 'text') =>{	
		const highlighter = await createHighlighter({
		themes: ['material-theme-darker'],
		langs: ['javascript','typescript']
	  })
		await highlighter.loadLanguage('javascript', 'typescript')
		const html = escapeSvelte(highlighter.codeToHtml(code, {lang, theme: 'material-theme-darker'}))
		return `{@html \`${html}\` }`
	}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, {tight: true}]],
	rehypePlugins: [rehypeSlug],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
}

export default config
