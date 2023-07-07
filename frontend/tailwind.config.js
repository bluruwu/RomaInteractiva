/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					rojo: "#8E0000",
					rojolight: "#A80000",
					doradonormal: "#ffad1b",
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
	plugins: [require("flowbite/plugin")],
};
