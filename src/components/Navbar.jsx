import React from 'react'
import Avatar from '../img/avatar_icon.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>ChatAll</div>
      <div className='user'>
        <img src ={Avatar} alt =""/>
        <span>Sumit</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
