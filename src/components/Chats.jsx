import React from 'react'
import Avatar from '../img/avatar_icon.jpg'
function Chats() {
    return (
        <div className='chats'>
          <div className='userChat'>
             <img src={Avatar} alt=''/>
             <div className='userChatInfo'>
              <span>Sumit</span>
              <p>Dummy Text</p>
             </div>
           </div>
           <div className='userChat'>
             <img src={Avatar} alt=''/>
             <div className='userChatInfo'>
              <span>Sumit</span>
              <p>Dummy Text</p>
             </div>
           </div>
           <div className='userChat'>
             <img src={Avatar} alt=''/>
             <div className='userChatInfo'>
              <span>Sumit</span>
              <p>Dummy Text</p>
             </div>
           </div>
           <div className='userChat'>
             <img src={Avatar} alt=''/>
             <div className='userChatInfo'>
              <span>Sumit</span>
              <p>Dummy Text</p>
             </div>
           </div>
           </div>
           
       
      )
}

export default Chats
