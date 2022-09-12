import React from 'react'
import Cam from '../img/icons8-cam-64.png'
import More from '../img/icons8-more-48.png'
import addUser from '../img/icons8-add-user-male-30.png'

function Chat() {
  return (
    <div className='chat'>
     <div className="chatinfo">
      <span>Sumit</span>
      <div className="chaticon">
        <img src={Cam} alt="" />
        <img src={addUser} alt="" />
        <img src={More} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Chat
