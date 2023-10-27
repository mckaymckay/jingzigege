const path = require('path');

// entry：webpack打包入口文件
// output：打包的输出文件
module.exports = {
  entry: './a.js',
  output: {
    // path是Node.js的路径解析模块
    // resolve方法将方法参数解析为一个绝对路径返回
    // __dirname是Node.js的一个全局变量，表示当前文件的路径
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};