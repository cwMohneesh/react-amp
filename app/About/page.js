"use client"
import React, { useState } from 'react'
import axios from 'axios'

const about = () => {
  
  const [images, setImages] = useState([]);
  const getImages = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log(response.data);
      var data = response.data;
      setImages(data)
    }
    catch{
      console.error("Error found in fetching images");
    }
  }

  return (
    <>
      About
      <button onClick={getImages} className='m-10'>Get Images</button>
      <div className='p-10'>
        {images.map(
          (elem, i)=>{
            return <img key ={i} 
            src={elem.download_url} 
            className='m-5 inline-block'
            width={300}
            />
          }
        )}
      </div>
    </>
  )
}

export default about
