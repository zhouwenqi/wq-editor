const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'./src/app.jsx'),
    output:{
        path:path.resolve(__dirname,'./website/'),
        filename:'index.js'
    },
    module:{
        rules:[
            {test:/\.js[x]?$/,exclude:/node_modules/,use:[{loader:'babel-loader'}]},
            {test:/\.css$/,loaders:['style-loader','css-loader']},
            {test:/\.less$/,loaders:['style-loader','css-loader','less-loader']},
            {test:/\.(png|jpg)$/,loader:'url-loader?limit=25000'}
        ]
    },
    devServer:{
        contentBase:path.resolve(__dirname,"./website"),
        historyApiFallback:true,
        inline:true,
        hot:true,
        port:9990
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}