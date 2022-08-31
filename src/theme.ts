import type { Theme } from "theme-ui";

const theme: Theme = {
	breakpoints: ["40em", "52em", "64em"],
	space: [0, 8, 16, 32, 64, 128, 256],
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fonts: {
		body: '"Klima Regular", sans-serif',
		heading: '"Klima Ultra", sans-serif',
		hero: '"Klima Ultra Italic", sans-serif',
		alternate: '"Lora Italic", serif',
		monospace: "Menlo, monospace",
	},
	colors: {},
	styles: {
		patternBg: {
			backgroundColor:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABVJREFUGFdjZGBgSGNgYJjFyAABaQAMKwFp9m3g7wAAAABJRU5ErkJggg==",
			backgroundRepeat: "repeat",
		},
	},
};
export default theme;
