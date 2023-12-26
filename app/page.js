"use client"
import React, { useState } from 'react'



const page = () => {
  const [user, setUser] = useState("Mohneesh")
  
  return (
    <>
      My page Name is: {user}
      <br/>
      <button onClick={()=>{
        setUser("Bhargava")
      }}>Update</button>
    </>
  )
}

export default page
