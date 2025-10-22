import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { addMessage, readMessages } from '../utils'
import { Message } from './Message'

export const Chatroom = ({user}) => {
    const [messages,setMessages]=useState([])
    const inputRef=useRef()

    useEffect(() =>{
      const unsubscribe = readMessages(setMessages)
      return unsubscribe // cleanup effect
    }, [])

    console.log(messages)
    

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const text=inputRef.current.value 
        console.log(text);
        const message={
            text,
            uid:user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName,
            timestamp:Date.now()
        }
        //meghíjuk a firestore fg-t
        await addMessage(message)

    }

    

  return (
    <div>
      default Chatroom

      <form  onSubmit={handleSubmit} className='chatForm'>
        <input ref={inputRef} type="text" placeholder='írj valamit...' />
        <button type='submit'>Küldés</button>
      </form>
      <div className='messagesHolder' style={{display:"flex", flexDirection:"column", gap:"10px"}}>

      {messages && messages.map(msg =><Message key={msg.id} msg={msg}  currentUser={user.uid}/>)}
      </div>

    </div>
  )
}

