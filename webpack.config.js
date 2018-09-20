const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
	JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
    mode: 'production',
	entry: path.join(paths.JS, 'app.js'),
	output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
	},
    // It uses our "src" folder as a starting point
    devServer: {
        contentBase: paths.SRC
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // Enable importing JS files without specifying their's extenstion
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
