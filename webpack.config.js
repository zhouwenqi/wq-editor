const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'./src/app.js'),
    output:{
        path:path.resolve(__dirname,'./website/'),
        filename:'build.js'
    },
    module:{
        rules:[
            {test:/\.js[x]?$/,exclude:/node_modules/,loader:'babel-loader',
            query: {
                presets: ['es2015', "react","stage-2"]
            }},
            {test:/\.css$/,loaders:['style-loader','css-loader']},
            {test:/\.less$/,loaders:['style-loader','css-loader','less-loader']},
            {test:/\.(png|jpg)$/,loader:'url-loader?limit=25000'}
        ]
    },
    devServer:{
        contentBase:path.resolve(__dirname,"./demo"),
        historyApiFallback:true,
        inline:true,
        hot:true,
        port:9990
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}