import React from 'react'
import Cam from '../img/icons8-cam-64.png'
import More from '../img/icons8-more-48.png'
import addUser from '../img/icons8-add-user-male-30.png'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/chatContext'

function Chat() {
  const {data}= useContext(ChatContext);

  return (
    <div className='chat'>
     <div className="chatInfo">
      <span>{data.user?.displayName}</span>
      <div className="chaticon">
        <img src={Cam} alt="" />
        <img src={addUser} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
     <Messages />
     <Input />
  </div>
  )
}

export default Chat
