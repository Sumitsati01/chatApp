import React from 'react'
import '../style.scss'
import Avatar from '../img/avatar.png'


function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='title'>Register Here</span>
        <form className='formOuter'>
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Email'/>
          <input type="password" placeholder='Password'/>
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor='file'><img src={Avatar} alt=""/>
          <span>Add an avatar</span></label>
          <button>Sign Up</button>
        </form>
        <p>If you already have an account! Login</p>
      </div>
    </div>
  )
}

export default Register
