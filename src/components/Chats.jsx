import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext'
import { ChatContext } from '../context/chatContext';
import { db } from '../Pages/Firebase';
function Chats() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        let chatt = [];
        Object.entries(doc.data())?.map((chat) => {
          if (chat[0] !== 'undefined') {
            chatt.push(chat);
          }
        })
        setChats([...chatt])
      });
      return () => {
        unsub()
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user })
  }

  return (
    <div className='chats'>
      {chats.map((chat) => (
        <div className='userChat' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1]?.userInfo?.photoURL ? chat[1].userInfo.photoURL :' '} alt='' />
          <div className='userChatInfo'>
            <span>{chat[1]?.userInfo?.displayName}</span>
            <p>{chat[1]?.lastMessage?.text ? chat[1]?.lastMessage?.text :' '}</p>
          </div>
        </div>
      ))}
    </div>


  )
}

export default Chats
