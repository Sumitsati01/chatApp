import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Pages/Firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const {currentUser} =useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='logo'>ChatAll</div>
      <div className='user'>
        <img src ={currentUser.photoURL} alt =""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
