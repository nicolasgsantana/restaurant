const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/img/icons/snowflake.svg',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer'
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ],
    },
}
