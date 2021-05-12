const path= requuire('path')
const WEBPACK = require('webpack');

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(_dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js?$/,
                exclude:/node_modules/
            }
        ]
    },
    devServer:{
        port:3000,
        contentBase:'./public',
        inline:true
    }

}