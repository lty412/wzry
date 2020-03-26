const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 关联分类
  body: { type: String },
}, {
  timestamps: true // 时间戳，创建的时候会自己生成一个开始时间和结束时间
})

module.exports = mongoose.model('Article', schema)