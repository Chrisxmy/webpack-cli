var path = require('path');
var entrys = require('./entrys.js');

var dirPage = path.resolve(__dirname, '../src/page');

var dirView = path.resolve(__dirname, '../src/view');

// 单独处理项目首页
// 因为它的结构与其它页面不相同
var entrysConfig = [
  {
    entryName: 'index',
    entry: path.resolve(dirPage, 'index/index.js'),
    filename: 'index.html',
    template: path.resolve(dirView, 'index.html')
  }
];

entrys.forEach(function (entry) {
  var filename = entry + '.html';

  entrysConfig.push({
    entryName: entry,
    entry: path.resolve(dirPage, entry + '/' + entry + '.js'),
    filename: filename,
    template: path.resolve(dirView, filename)
  });
});

module.exports = {
  entrys: entrysConfig,
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'assets',
  commonsChunkName: ['app', 'vendor', 'manifest'],
  dev: {
    env: require('./dev.env.js'),
    assetsPublicPath: '/'
  },
  build: {
    env: require('./prod.env.js'),
    // 可配置 CDN
    assetsPublicPath: '/'
  }
}
