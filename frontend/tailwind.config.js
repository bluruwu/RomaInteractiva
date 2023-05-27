/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					doradonormal: "#FFAD1B",
					rojo: "#8E0000",
					doradodark: "#e69200",
					doradolight: "#ffcc33",
				},
			},
			fontFamily: {
				text: ["Merriweather"],
			},
			fontWeight: {
				regular: 400,
				bold: 700,
			},
			width: {
				128: "32rem",
			},
		},
	},
	plugins: [],
};
