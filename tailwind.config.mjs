/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#0072C6',
			white: '#FFFFFF',
			black: '#000000',
			gray: "#00000080",
		},
		fontFamily: {
			sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
		},
	}
}
