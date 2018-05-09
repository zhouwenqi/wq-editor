const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./website/'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        extensions:['','.js','.json','.scss','.ts']
    }

}