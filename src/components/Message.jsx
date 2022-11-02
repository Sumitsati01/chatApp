import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext'
//import Avatar from '../img/avatar_icon.jpg'

function Message({message}) {
  const {currentUser} =useContext(AuthContext)
  const {data}=useContext(ChatContext);
  const ref =useRef();

  useEffect(()=>{
  ref.current?.scrollIntoView({behavior:'smooth'});
  },[message])
 
  return (
    <div ref={ref} className={`message ${message.senderID===currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={ message.senderID===currentUser.uid? currentUser.photoURL : data.user.photoURL} alt="" />
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
