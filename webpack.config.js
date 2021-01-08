const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MODE = process.env.WEBPACK_ENV;

module.exports = {
    entry: path.resolve(__dirname, "assets", "js", "main.js"),
    mode: MODE,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Create `style` nodes from JS strings
                    
                    // Translate CSS into CommonJS
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {   // Compiles Sass to Css
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        },
                    },
                ],
            }
        ]
    }
}; 