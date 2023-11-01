/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': 'var(--primary)',
				'title': 'var(--title)',
				'text': 'var(--text)',
				'border': 'var(--border)',
				'bg-dark': 'var(--bg-dark)',
				'bg-light': 'var(--bg-light)'
			}
		},
	},
	plugins: [],
};

