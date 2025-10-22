import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebaseApp'

export const SignIn = () => {

    const handleSignIn=async ()=>{
        await signInWithPopup(auth,provider)
    }
  return (
    <div className='signin'>
        <p>Jelentkezz be hogy chatalhess!</p>
        <button onClick={handleSignIn}>Bejelentkezés Google fiókkal</button>
    </div>
  )
}


