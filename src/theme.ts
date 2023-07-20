import type { Theme } from "theme-ui";

/* 
	Alts:
	--theme-ui-colors-primary: #ff2a5b;
    --theme-ui-colors-accent: #fdc737;
    --theme-ui-colors-paper: #fff;
    --theme-ui-colors-text: #000000; */

const theme: Theme = {
	breakpoints: ["1160px"],
	space: [0, 8, 16, 32, 64, 128, 256],
	fontSizes: [13, 16, 21, 25, 33, 49, 65, 97],
	fonts: {
		body: '"Open Sans", sans-serif',
		// heading: '"Barlow", sans-serif',
		// headingAlt: '"Barlow Condensed", sans-serif',
		// headingAlt: '"Champion Gothic Middleweight", sans-serif',
		headingSecondary: '"Champion Gothic Featherweight", sans-serif',
		heading: '"Champion Gothic Heavyweight", sans-serif',
	},
	sizes: {
		normal: "840px",
		tight: "640px",
	},
	fontWeights: {
		body: 400,
		heading: 400,
		headingSecondary: 400,
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
		// primary: "#ed1685",
		primary: "#ff2a5b",
		// accent: "#e5ff37",
		accent: "#fdc737",
		paper: "#fff",
		text: "#020310",
	},
	buttons: {
		primary: {
			/* boxShadow: "5px 6px #020310", */
			borderRadius: 0,
		},
	},
	styles: {
		h2: {
			/* main h2 styles */
			borderTop: "5px solid",
			borderColor: "primary",
			pl: 2,
			lineHeight: "1em",
			fontSize: 5,
			mt: [0, 4],
			mb: [0, 2],
			textAlign: ["center", null],
		},
		root: {
			color: "text",
			"a, a:visited": {
				color: "primary",
				textDecoration: "none",
			},
			"h2,h3,h4,h5": {
				fontFamily: "headingSecondary",
				lineHeight: "1em",
				py: 2,
				fontWeight: 400,
			},
			h1: {
				fontFamily: "heading",
				color: "primary",
				fontWeight: 400,
			},
			h2: {
				/* hero h2 */
				fontSize: [4, 5],
				px: [1, null],
			},
			h3: {
				display: "inline-block",
				fontSize: ["8vw", "2.5vw"],
				my: 0,
				pb: 0,
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
			".accordion": {
				pb: 3,
				h3: {
					display: "block",
					pt: 0,
					backgroundImage:
						"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABVJREFUGFdjZGBg8GVgYNjMyAABvgALrgFQQ0xB3AAAAABJRU5ErkJggg==)",
					backgroundRepeat: "repeat",
					backgroundColor: "rgba(229,255,55,0)",
					span: {
						transition: "background-color .2s ease-out",
					},
					'&[data-state="open"]': {
						borderBottom: "2px solid",
						span: {
							backgroundColor: "accent",
						},
					},
					'&[data-state="closed"]': {},
					button: {
						borderBottom: 0,

						cursor: "pointer",
						fontSize: ["32px", "3vw"],
						lineHeight: "1.2em",
						fontFamily: "headingSecondary",
						background: "none",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						textAlign: "left",
						width: "100%",
						pl: 2,
						py: [2, null],
						svg: {
							width: ["8vw", "2em"],
						},
					},
					"&:after": {
						height: ".1em",
						display: "none",
					},
				},
				p: {
					my: 2,
					mx: 2,
					lineHeight: "1.5em",
				},
				"& div:last-of-type h3": {
					borderBottom: "2px solid",
				},
			},
			".splide-wrapper": {
				color: "paper",
				background: "text",
				textAlign: "center",
				mt: 4,
				".splide__arrow": {
					background: "primary",
				},
				".splide__arrows": {
					zIndex: 100,
				},
				".splide__pagination__page": {
					opacity: 0.3,
				},
				".splide__pagination__page.is-active": {
					background: "accent",
					opacity: 1,
				},
				".splide__list": {
					alignItems: "center",
				},
				".splide__track": {
					width: "100%",
				},
				".quotemarks": {
					mt: -4,
					opacity: 0.3,
					pointerEvents: "none",
					width: "100%",
					position: ["relative", "absolute"],
					color: "accent",
					zIndex: "2",
					fontSize: 500,
					mx: "auto",
					display: ["none", "block"],
					height: 600,
					mb: -100,
					overflow: "hidden",
					".l": {
						float: "left",
						mt: "-150px",
						ml: "30px",
					},
					".r": {
						float: "right",
						mt: "130px",
						mr: "20px",
					},
				},

				".stories": {
					color: "paper",
					background: "text",
					px: [1, 2],
					".story": {
						px: [1, 2],
						pt: 3,
						mx: "auto",
						maxWidth: "100%",
						width: ["100%", "80%"],
						display: "block",
						fontSize: [2, 3],
						lineHeight: [1.2, "1.87em"],
					},
					".name": {
						fontStyle: "italic",
						opacity: 0.7,
						pb: [3],
					},
				},
			},
			footer: {
				width: "100%",
				height: "140px",
				backgroundColor: "text",
				color: "paper",
				p: 2,
				textAlign: "center",
			},
		},
	},
};
export default theme;
