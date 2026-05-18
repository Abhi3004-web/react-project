const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
        },
        headers: {
            'Cache-Control': 'no-store',
        },
        port: 3002,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
