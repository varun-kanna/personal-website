module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				darkest: '#222831',
				sdarkest: '#31363F',
				secondary: '#88EFFC',
				secondayHover: '#D3E6E9',
				main: '#EEEEEE',
				darkBlue: '#2B4869',
				lightBlue: '#CADCFC',
			},
			padding: {
				'10px': '10px',
				'2px': '2px',
			},
			screens: {
				'max-660': { max: '660px' },
			},
		},
	},
	plugins: [],
};
