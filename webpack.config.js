const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: ["./src/scripts/app.js"],
    output: {
        filename: 'app.js'
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
