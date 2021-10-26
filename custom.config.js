let path = require('path')

let resolve = function(...dir) {
  return path.resolve(__dirname, ...dir)
}

module.exports = {
  title: 'kiwi-vue2.0', // 网页标题
  port: 8088, // 服务端口
  devtool: 'cheap-eval-source-map',
  extensions: ['.es6', '.html', '.less'], // 文件后缀
  entry: './src/main', // 入口地址
  productionGzip: false, // 是否在build下开启Gzip压缩
  openBrowser: false, // 自动打开浏览器
  favicon: 'favicon.ico',

  // 编译输出的`dist/static`目录在服务端对应的路由地址
  // 例如配置如下时，`dist/static/index.js`对应`/static/index.js`
  publicPath: '/',
  alias: {
    '@': resolve('src'),
    'apps': resolve('src', 'apps'),
    'commons': resolve('src', 'commons'),
    'utils': resolve('src', 'utils'),
    'mixins': resolve('src', 'plugin', 'mixins')
  }, // 路径别名，方便进行代码引入
  externals: [], // 外部引入依赖
  providers: {
    '_': 'lodash'
  }, // providerPlugin的配置，如果有需要的话
  css: [
    '/static/element/black/index.css',
    '/static/style.css',
    '/static/animate.css'
  ], // 引入外部样式
  define: {
    'process.env.TARGET': JSON.stringify(process.env.TARGET)
  },

  // webpack-dll相关配置
  // 当entry为一个对象时，每一个key为一个dll
  // 例如：{entry: { 'vendor1': ['xxx', 'xxx1'], 'vendor2': ['xxx2', 'xxx3'] }}
  dll: {
    enable: true,
    entry: [
      'ajv',
      'crypto-js',
      'fuse.js',
      'qs',
      'axios',
      'lodash',
      'vue',
      'vue-router',
      'vuex'
    ]
  },
  router: {

    // 路由路径前缀
    routePrefix: '',
    ignore: ['**/i18n/**/*', '**/components/**/*'],
    lazyLoad: true
  },
  eslint: {
    enable: false,
    test: /\.(es6|vue|js)$/
  }, // 是否使用eslint进行语法检查
  stylelint: false // 是否使用stylelint进行语法检查
}
