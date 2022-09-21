import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext';
import { db } from '../Pages/Firebase';
function Chats() {
  const {currentUser}=useContext(AuthContext);
  const {dispatch}=useContext(ChatContext);
  const [chats,setChats]=useState([]);

  useEffect(()=>{
    const getChats=()=>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
    });
    return()=>{
      unsub()
    };
    };
   currentUser.uid && getChats();
},[currentUser.uid]);


const handleSelect=(user)=>{
 dispatch({type:"CHANGE_USER",payload:user})
}

console.log(chats)
    return (
        <div className='chats'>
          {Object.entries(chats)?.map((chat) => (
         
          <div className='userChat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
             <img src={chat[1].userInfo.photoURL} alt=''/>
             <div className='userChatInfo'>
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].userInfo.lastmessage?.text}</p>
             </div>
           </div> 
           ))}
          </div>
           
       
      )
}

export default Chats
