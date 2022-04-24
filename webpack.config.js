const path = require('path');

module.exports = {
    entry: './source/reagent.ts',
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
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
}