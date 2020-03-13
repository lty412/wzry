const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 关联分类
  body: { type: String },
})

module.exports = mongoose.model('Article', schema)