import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
//import { ChatContext } from '../context/chatContext'
//import Avatar from '../img/avatar_icon.jpg'

function Message({message}) {
  const {currentUser} =useContext(AuthContext)
 //const {data}=useContext(ChatContext);
// console.log(message);
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={currentUser.photoURL} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
      <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message
