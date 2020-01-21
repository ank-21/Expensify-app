const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//we need to define seperate condition for prod and dev and therefore instead of doing it in object we will use module.exports as function
//and we wll use all the statements and keep it inside return statement
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return{
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
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
                use: CSSExtract.extract({
                    use: [{
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                        
                    //we dont use style-loader as it is for inline
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        //for getting error location
        devtool: isProduction ? 'source-map' :'inline-soure-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
        }
    
}

