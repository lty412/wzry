// 连接数据库的插件
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true
  })

  // 把 models 文件夹的所有文件都引用进来，使用一遍
  require('require-all')(__dirname + '/../models')
  
}