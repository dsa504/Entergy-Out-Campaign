import type { Theme } from "theme-ui";

const theme: Theme = {
	breakpoints: ["40em", "64em"],
	space: [0, 8, 16, 32, 64, 128, 256],
	fontSizes: [13, 16, 21, 25, 33, 49, 65, 97],
	fonts: {
		body: '"Open Sans", sans-serif',
		heading: '"Barlow", sans-serif',
		headingAlt: '"Barlow Condensed", sans-serif',
	},
	sizes: {
		normal: "840px",
		tight: "640px",
	},
	fontWeights: {
		body: 400,
		heading: 900,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: "1em",
	},
	letterSpacings: {
		body: "normal",
	},
	colors: {
		primary: "#ed1685",
		accent: "#e5ff37",
		white: "#fff",
		text: "#020310",
	},
	buttons: {
		primary: {
			/* boxShadow: "5px 6px #020310", */
			borderRadius: 0,
		},
	},
	styles: {
		root: {
			color: "text",
			h1: {
				fontFamily: "headingAlt",
				color: "primary",
			},
			h2: {
				fontSize: ["6vw", 5],
			},
			h3: {
				display: "inline-block",
				fontSize: "2.5vw",
				my: 0,
				"&:after": {
					content: `''`,
					backgroundColor: "accent",
					height: ".6em",
					width: "103%",
					display: "block",
					mt: "-.4em",
					ml: ".3em",
				},
			},
			"h2,h3,h4,h5": {
				fontFamily: "heading",
				lineHeight: "1em",
				py: 2,
			},
			patternBg: {
				backgroundColor:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABVJREFUGFdjZGBgSGNgYJjFyAABaQAMKwFp9m3g7wAAAABJRU5ErkJggg==",
				backgroundRepeat: "repeat",
			},
		},
	},
};
export default theme;
