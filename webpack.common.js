const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            scriptLoading: "defer",
            chunks: ["index"]
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css", ".pug", ".html"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                loaders: ["pug-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};