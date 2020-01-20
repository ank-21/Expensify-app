const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },

    //we told babel to run evry time its see a js file
    //we setup loader via module, can explore it by seeeing webpack.js.org
    //we setup rules

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
            //this rule is to tell webpack to run babel whenever a file with js meets
        }, {
            test:/\.css$/,
            //use helps us to provides array of loader
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    //for getting error location
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
}