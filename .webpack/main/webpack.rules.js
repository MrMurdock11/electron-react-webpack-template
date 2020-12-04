module.exports = [
	{
		test: /\.ts$/,
		exclude: /node_modules/,
		include: /src/,
		use: { loader: "babel-loader" },
	},
];
