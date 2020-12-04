const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./.webpack/renderer/webpack.common");

module.exports = (_, args) => {
	if (args.mode === "development") {
		return merge(common, {
			devServer: {
				contentBase: path.join(__dirname, "./dist/renderer"),
				historyApiFallback: true,
				compress: true,
				hot: true,
				port: 4000,
				publicPath: "/",
			},
		});
	} else {
		return common;
	}
};
