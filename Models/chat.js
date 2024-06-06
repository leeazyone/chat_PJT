const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema(
  {
    // 채팅 내용
    chat: String,
    // 채팅 보낸 유저 정보
    user: {
      id: {
        // id 값
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
      name: String, // 이름
    },
  },
  { timestamp: true }
)
module.exports = mongoose.model('Chat', chatSchema)
