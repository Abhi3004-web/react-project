let path = require("path");
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3500
    }
};