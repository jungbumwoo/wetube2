const path = require('path');
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MODE = process.env.WEBPACK_ENV;

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
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
                test: /\.(scss)$/,
                use: [
                    // Create `style` nodes from JS strings
                    
                    // Translate CSS into CommonJS
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            browsers: "cover 99.5%"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    {   // Compiles Sass to Css
                        loader: "sass-loader"
                    },
                ],
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: OUTPUT_DIR,
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: '[name].css',
        })
    ],
}; 

module.exports = config;