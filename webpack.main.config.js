const { merge } = require("webpack-merge");
const common = require("./.webpack/main/webpack.common");

module.exports = (_, args) => {
	if (args.mode === "development") {
		return common;
	} else {
		return merge(common, {
			plugins: require("./.webpack/main/webpack.plugins"),
		});
	}
};
