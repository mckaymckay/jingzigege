const path = require('path');

// context表示entry的是从哪个目录为起点，是一个字符串，表示一个绝对路径；
// entry：webpack打包入口文件；
// output：打包的输出文件
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './js/a.js',
  output: {
    // path是Node.js的路径解析模块；
    // resolve方法将方法参数解析为一个绝对路径返回；
    // __dirname是Node.js的一个全局变量，表示当前文件的路径
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  // module值是一个对象，其rules是对各个类型文件的处理规则配置；
  // test值是一个正则表达式，该处表示当文件后缀是.css的时候，使用use项里的loader进行处理；
  // use值是一个数组，每一项是一个loader。loader的执行顺序是从后向前：先执行css-loader，把css-loader的执行结果交给style-loader执行
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  mode: 'production'
};