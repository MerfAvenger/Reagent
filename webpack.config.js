const path = require('path');

module.exports = {
    entry: './source/reagent.ts',
    types: ["@webgpu/types"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'reagent.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.ts?$/, loader: "ts-loader"},
            {test: /\.js?$/, loader: "source-map-loader"}
        ]
    },
}