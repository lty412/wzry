const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: { 
    type: String, 
    select: false, // 不让密码被查出来
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  },
})

module.exports = mongoose.model('AdminUser', schema)