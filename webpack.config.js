const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/scripts/app.js",
        hubspot: "./src/hubspot/scripts/hubspot.js"
    },
    output: {
        filename: '[name].js'
    },
    devtool: "sourcemap",
    externals: {
        //"jquery": "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env"]
                        ]
                    }
                }
            }
        ]
    }
};
