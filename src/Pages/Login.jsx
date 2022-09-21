import React, { useState } from 'react'
import '../style.scss'
// eslint-disable-next-line
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// eslint-disable-next-line
import { auth, storage, db } from '../Pages/Firebase'
// eslint-disable-next-line
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// eslint-disable-next-line
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

    return (
        <div className='formContainer'>
          <div className='formWrapper'>
            <span className='title'>Login Here</span>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Enter Email'/>
              <input type="password" placeholder='Password'/>
              <button>Sign In</button>
              {err && <span>Something Went Wrong</span>}
            </form>
            <p>If you don't have an account! <Link to='/register'>Register Here</Link></p>
          </div>
        </div>
      )
}

export default Login
