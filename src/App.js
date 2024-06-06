import { useEffect, useState } from 'react'
import './App.css'
import socket from './server'
import InputField from './components/InputField/InputField'
import MessageContainer from './components/MessageContainer/MessageContainer'

function App() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])
  console.log('message List', messageList)
  useEffect(() => {
    socket.on('message', (message) => {
      setMessageList((prevState) => prevState.concat(message))
    })
    askUserName()
  }, [])

  const askUserName = () => {
    // 프롬프트로 username 입력 받기
    const userName = prompt('당신의 이름을 입력하세요')

    // 유저 이름이 이거야 로그인 할게!!!
    socket.emit('login', userName, (res) => {
      if (res?.ok) {
        setUser(res.data)
      }
    })
  }
  const sendMessage = (event) => {
    // event.preventDefalut() // refresh 막기
    socket.emit('sendMessage', message, (res) => {
      console.log('sendMessage res', res)
    })
  }
  return (
    <div>
      <div className='App'>
        <MessageContainer messageList={messageList} user={user} />
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default App
