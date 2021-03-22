module.exports = {
	purge: [
		'./dist/**/*.html',
		'./src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
			  'primary': '#243c5a',
			  'brownbutton': '#9a825c'
			},
			fontFamily: {
				'roboto': 'Roboto'
			}
		}	
	},
	variants: {},
	plugins: [],
  }