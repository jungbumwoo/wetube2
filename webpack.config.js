const path = require('path');

const MODE = process.env.WEBPACK_ENV;

module.exports = {
    entry: path.resolve(__dirname, "assets", "js", "main.js"),
    mode: MODE,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
    },
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
                    "style-loader",
                    // Translate CSS into CommonJS
                    "css-loader",
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