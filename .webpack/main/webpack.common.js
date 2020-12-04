const path = require("path");

module.exports = {
	target: "electron-main",
	resolve: {
		extensions: [".ts"],
	},
	entry: "./src/electron.ts",
	output: {
		path: path.resolve(__dirname, "../../dist"),
	},
	module: {
		rules: require("./webpack.rules"),
	},
};
