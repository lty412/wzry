module.exports = {
  outputDir: __dirname + '/../server/admin', // build 后把生成的静态文件存放在 server 里的 admin 文件夹中
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'   // 生成静态文件的根路径
    : '/'
}