const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				darkseagreen: "#6CD881",
				mediumorchid: "#7A31FF"
			}
		}
	},

	plugins: []
};

module.exports = config;