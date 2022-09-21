import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ChatContext } from '../context/chatContext'
import { db } from '../Pages/Firebase';
import Message from './Message'

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatID]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
