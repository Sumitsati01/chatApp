import React from 'react'
import Avatar from '../img/avatar_icon.jpg'

function Search() {
  return (
    <div className='search'>
       <div className='searchForm'>
        <input type="text" placeholder='Find User' />
       </div>
       <div className='userChat'>
         <img src={Avatar} alt=''/>
         <div className='userChatInfo'>
          <span>Sumit</span>
         </div>
       </div>
    </div>
  )
}

export default Search
