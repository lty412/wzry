const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 关联分类
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  skills: [{
    icon: { type: String },
    name: { type: String },
    delay: { type: String },
    cost: { type: String },
    description: { type: String },
    tips: { type: String },
  }],
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partners: [{
    hero: { type:mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }],
  beRestrain: [{
    hero: { type:mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }],
  restrainWho: [{
    hero: { type:mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }],
})

module.exports = mongoose.model('Hero', schema, 'heroes')