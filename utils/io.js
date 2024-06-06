const userController = require('../Controllers/user.controller')
const chatController = require('../Controllers/chat.controller')

module.exports = function (io) {
  io.on('connection', async (socket) => {
    console.log('client is connected', socket.id)

    // 로그인으로 말했을 때 async() 함수 실행
    socket.on('login', async (userName, cb) => {
      console.log('backend', userName)
      // 유저정보를 저장
      try {
        const user = await userController.saveUser(userName, socket.id)
        const welcomeMessage = {
          chat: `${user.name} is joined to this room`,
          user: { id: null, name: 'system' },
        }
        io.emit('message', welcomeMessage) // 모두에게 메세지 보내기
        cb({ ok: true, data: user })
      } catch (error) {
        cb({ ok: false, error: error.message })
      }
    })

    socket.on('sendMessage', async (message, cb) => {
      try {
        // socket id로 유저찾기
        const user = await userController.checkUser(socket.id)
        // 메세지 저장
        const newMessage = await chatController.saveChat(message, user)
        io.emit('message', newMessage) // 전체 클라이언트에게 메세지 보내기
        cb({ ok: true })
      } catch (error) {
        cb({ ok: false, error: error.message })
      }
    })

    socket.on('disconnect', () => {
      console.log('user is disconnectd')
    })
  })
}
