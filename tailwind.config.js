/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens : {
			'medium' : {'max':'768px'},
			'small' : {'max':'640px'},
			'large' : {'max':'1024px'},
			'xlarge' : {'max':'1280px'},
			'2xlarge' : {'max' : '1536px'},
		},
		extend: {},
	},
	plugins: [],
};
