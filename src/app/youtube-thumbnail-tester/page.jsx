'use client';
import React, { useState } from 'react';

function TestThumbnail (){

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [channel, setChannel] = useState("");

  const ImageUploadPreview = (event) => {

    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  }




  return (
    <div className='m-5'>
      <form className='p-2 border-2 rounded-2 w-auto h-auto text-xl'>
        <div className='flex justify-center'>
        <div className='relative'>
        <input type="file" accept='image/*' alt='thumbnail'  onChange={ImageUploadPreview} className='absolute top-0 bottom-2 left-0 w-60 h-40 opacity-0 border-2 cursor-pointer z-10 rounded-lg' />
       
          {preview ? (
            <img src={preview} alt="preview" className='border-2 rounded-lg mr-4 w-60 h-40' />
          ):
          
          (
            <div className='relative'>
          <div title="hellow" className=" w-60 h-40 bg-white border-2 mr-4 rounded-lg" />
            <p className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>select image </p>
            </div>
          )
         

//           <div className="relative">
//   <div title="hellow" className="w-60 h-40 bg-white border-2 mr-4 rounded-lg" />
//   <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Select Image</p>
// {/* </div> */}

          
          }
          
          </div>
          <div className='block w-40 mt-2'>
            <label >Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title of Video' className='border-2 mb-4'/>
            
            <label>Channel Name</label>
            <input type="text" value={channel} onChange={(e) => setChannel(e.target.value)} placeholder='Enter Channel Name....'  className='border-2 mb-4'/>

            <button className='bg-yellow-500 text-black text-xl rounded-md p-2'>Text Thumbnail</button>
          </div>
        </div>

          
        <a href="https://reduceimages-sigma.vercel.app/">Reduce Image</a>
       
      </form>
    </div>
  )



}



export default TestThumbnail;
