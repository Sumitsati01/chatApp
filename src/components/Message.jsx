import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext'
import Avatar from '../img/avatar_icon.jpg'

function Message({message}) {
  const {currentUser} =useContext(AuthContext)
  const {data}=useContext(ChatContext);

  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={currentUser.photoURL} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default Message
