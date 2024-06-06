import { io } from 'socket.io-client'
const socket = io('http://localhost:5001') // 연결하고 싶은 백엔드 주소로 소켓을 만들겠다.
export default socket
