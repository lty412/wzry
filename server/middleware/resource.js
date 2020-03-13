/**
 * 中间件 ---  获取对应接口的模型（把接口路由最后一个字段的复数转成单数（复数是接口的名称，单数是model文件夹里对应的名称））
 */
module.exports = option => {
  return async(req, res, next) => {
    // 获取对应接口的模型
    const modelName = require('inflection').classify(req.params.resource) 
    req.Model = require(`../models/${modelName}`)  // 把转换好的数据挂载在 model 上，在其他地方也能适用
    next()
  }
}