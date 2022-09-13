import React from 'react'
import Avatar from '../img/avatar_icon.jpg'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Avatar} alt="" />
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
