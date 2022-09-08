import React from 'react'
import '../style.scss'

function Login() {
    return (
        <div className='formContainer'>
          <div className='formWrapper'>
            <span className='title'>Register Here</span>
            <form className='formOuter'>
              <input type="email" placeholder='Enter Email'/>
              <input type="password" placeholder='Password'/>
              <button>Sign In</button>
            </form>
            <p>If you don't have an account! Register Here</p>
          </div>
        </div>
      )
}

export default Login
