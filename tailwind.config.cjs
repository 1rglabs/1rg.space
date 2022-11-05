const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '24px'],
			base: ['16px', '25px'],
			lg: ['20px', '30px'],
			xl: ['24px', '35px'],
			'2xl': ['34px', 1],
			'3xl': ['40px', 1],
			'4xl': ['44px', 1],
			'5xl': ['65px', 1],
			'6xl': ['87.5px', 1]
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				darkseagreen: "#6CD881",
				mediumorchid: "#7A31FF"
			},
			spacing: {
				'18': '4.5rem',
			}
		}
	},

	plugins: []
};

module.exports = config;