/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function({addUtilities}){
			const newUtilities = {
				".hide-scrollbar": { 			/* Para ocultar el scrollbar en todos los navegadores */
					overflow: "hidden",
				},
				".hide-scrollbar::-webkit-scrollbar": {			/* Para ocultar el scrollbar pero mantener el scroll */
				    display: "none", /* Safari y Chrome */
				},
				".hide-scrollbar": {
				    "-ms-overflow-style": "none", /* Internet Explorer y Edge */
				    "scrollbar-width": "none", /* Firefox */
				},
			};
			addUtilities(newUtilities)
		},
	],
};
