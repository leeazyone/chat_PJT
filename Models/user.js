const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // 유저 이름
  name: {
    type: String,
    required: [true, 'User must type name'],
    unique: true,
  },

  // 연결 ID 정보
  token: {
    type: String,
  },

  /* 온오프라인
	online: {
		type: Boolean,
		default: false,
	}, */
})
module.exports = mongoose.model('User', userSchema)
