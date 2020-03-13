/**
 * 中间件 - 用于校验用户是否已登录
 */

module.exports = option => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async(req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const {id} = jwt.verify(token, req.app.get('secret'))   // 校验token，并解密
    assert(id, 401, '请先登录')
    req.user = await AdminUser.findById(id)   // 把解析出来的用户信息挂载到 req 上，在其他地方也能使用
    assert(req.user, 401, '请先登录')
    await next()
  }
}