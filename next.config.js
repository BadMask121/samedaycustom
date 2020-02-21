const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withPlugin = require("next-compose-plugins");
const withFonts = require("next-fonts");

const withImages = require("next-images");
module.exports = withPlugin([
	[
		withFonts(
			withCss(
				withSass({
					enableSvg: true,
					webpack(config, options) {
						return config;
					},
				}),
			),
		),
	],
	[withImages],
]);
