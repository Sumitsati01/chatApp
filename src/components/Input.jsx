import React, { useContext, useState } from 'react'
import Upload from '../img/upload-image-2.webp'
import Attach from '../img/attach.png'
import {  arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../Pages/Firebase';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/authContext';
import { ChatContext } from '../context/chatContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Input() {
  const [text,setText]=useState("");
  const [img,setImg]=useState(null)

  const {currentUser} =useContext(AuthContext)
  const {data}=useContext(ChatContext);

  const handleSend= async ()=>{
    if(img){
      const storageRef = ref(storage,uuid());
      const uploadTask=await uploadBytesResumable(storageRef, img);
      //console.log(uploadTask)
      uploadTask.on(
        (error) => {

        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );

    }else{
      await updateDoc(doc(db,'chats',data.chatID),{
        messages:arrayUnion({
          id:uuid(),
          text,
          senderID:currentUser.uid,
          Date:Timestamp.now()
        })
      })
    }

  await updateDoc(doc(db,'userChats',currentUser.uid),{
    [data.chatID + ".lastMessage"]: {
      text,
    },
    [data.chatID + ".date"]: serverTimestamp(),
  }
  );
  await updateDoc(doc(db,'userChats',data.user.uid),{
    [data.chatID + ".lastMessage"]: {
      text,
    },
    [data.chatID + ".date"]: serverTimestamp(),
  }
  );



  setText("");
  setImg(null);
  };

// Key Down

const handleKeyDownn= async (e)=>{
  if (e.key === 'Enter') {
  if(img){
    const storageRef = ref(storage,uuid());
    const uploadTask=await uploadBytesResumable(storageRef, img);
    //console.log(uploadTask)
    uploadTask.on(
      (error) => {

      },
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatID), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      }
    );

  }else{
    await updateDoc(doc(db,'chats',data.chatID),{
      messages:arrayUnion({
        id:uuid(),
        text,
        senderID:currentUser.uid,
        Date:Timestamp.now()
      })
    })
  }

await updateDoc(doc(db,'userChats',currentUser.uid),{
  [data.chatID + ".lastMessage"]: {
    text,
  },
  [data.chatID + ".date"]: serverTimestamp(),
}
);
await updateDoc(doc(db,'userChats',data.user.uid),{
  [data.chatID + ".lastMessage"]: {
    text,
  },
  [data.chatID + ".date"]: serverTimestamp(),
}
);



setText("");
setImg(null);
  }
};


  return (
    <div className='input'>
      <input type='text' placeholder='Type Something Here....'
         onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDownn}/>
      <div className='send'>
          <img src={Attach} alt="attach" />
          <input type="file" style={{display:'none'}} id='file' onChange={(e)=>setImg(e.target.files[0])}/>
          <label htmlFor="file">
            <img src={Upload} alt="" />
          </label>
          <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
