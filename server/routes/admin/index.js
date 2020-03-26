module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  const router = express.Router({
    mergeParams: true  // 合并参数
  })

  /***************  增删改查接口  begin **************/
  // 新建接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  
  // 编辑接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  
  // 删除接口
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 列表接口
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  // 获取详情接口
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  /**
   * 中间件
   * 1.authMiddleware - 用于校验用户是否已登录
   * 2.resourceMiddleware - 获取对应接口的模型（把接口路由最后一个字段的复数转成单数（复数是接口的名称，单数是model文件夹里对应的名称））
   */
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)
  /***************  增删改查接口  end **************/

  /***************  上传图片的接口  begin **************/
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  /***************  上传图片的接口  end **************/

  /***************  登录接口  begin **************/
  app.post('/admin/api/login', async(req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户名不存在')
    
    // 2.校验密码
    const isVaild = require('bcrypt').compareSync(password, user.password)
    assert(isVaild, 422, '密码错误')
 
    // 3.返回token
    const token = jwt.sign({id: user._id}, app.get('secret'))     // 用密码和密钥通过签名生成一个token
    res.send({
      token,
      userName: user.username
    })
  })
  /***************  登录接口  end **************/

  // 错误处理函数
  app.use(async(err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message
    })
  })
}