import React from 'react'

export const Message = ({msg, currentUser}) => {
  console.log(msg)
  const isOwn = msg.uid == currentUser
  return (
    <div className={`message ${isOwn ? "own" : ""}`} style={{display:"flex", gap:"15px"}}>
      <img src={msg.photoURL} alt="" className='messageImg' style={{borderRadius:"50%"}}/>   
      <div className='messageText'>
      <strong>{msg.displayName}</strong>
      <p>{msg.text}</p>
      </div>

    </div>
  )
}
