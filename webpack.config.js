const path = require('path');

module.exports = {
    entry : path.resolve(__dirname, 'src'),
    output : {
        path : path.resolve(__dirname,'buildCode'),
        filename : 'bundled.js'
    },
    devServer : {
        port : 1221,
        contentBase : path.resolve(__dirname , 'buildCode')
    },
    module : {
        rules : [
            {
                test : /.js$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            }
        ]
    }
}