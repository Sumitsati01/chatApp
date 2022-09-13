import React from 'react'
import Upload from '../img/upload-image-2.webp'
import Attach from '../img/attach.png'

function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Something Here....' />
      <div className='send'>
          <img src={Attach} alt="attach" />
          <input type="file" style={{display:'none'}} id='file'/>
          <label htmlFor="file">
            <img src={Upload} alt="" />
          </label>
          <button>Send</button>
      </div>
    </div>
  )
}

export default Input
