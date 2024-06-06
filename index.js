const { createServer } = require('http') // 서버 만들기
const app = require('./app') // 아까 만들었던 앱 가져오기
const { Server } = require('socket.io') // 웹 소켓 가져오기
require('dotenv').config() // pocess.env 사용하니까 가져오기

const httpServer = createServer(app)
const io = new Server(httpServer, {
  // 웹 소켓 서버 만들기, 웹 소켓 별명이 io
  cors: {
    origin: 'http://localhost:3000',
  },
})

require('./utils/io')(io)

httpServer.listen(process.env.PORT, () => {
  // 서버 틀어놓기, 포트넘버5001을 기준으로
  console.log('server listening on port', process.env.PORT) // 성공하면 띄움
})
