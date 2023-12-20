import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../client';
import { fetchuser } from '../utils/data';

const Tile = ({ fr }) => {
  client.fetch(fetchuser)
        .then((doc)=>{
          console.log(doc);
        })
  return (
    <>
      <div className='relative'>
        <div className='absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-200 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
        <div className='relative group h-56 w-[210px] bg-slate-200 border-2 border-slate-300 overflow-hidden'>
          <div className='bg-gray-600 w-full h-56 flex justify-center items-center absolute opacity-0 group-hover:opacity-50 transition-opacity'>
            <h1 className='text-white'>fhf</h1>
          </div>

          <div className='relative z-10'>
            <p className='text-center'>{fr}</p>
          </div>
        </div>
      </div>
    </>
  );
};



const Preview = () => {
  const arr = ['apple', 'mango', 'grapes', 'ghuiyan']
  const navigate = useNavigate();
  const handleUploadClick = () => {
    navigate("/upload")
  }

  return (
    <>
      <div className='my-10 flex justify-center'>
        <span className='text-4xl cursor-pointer hover:text-orange-600'>
          Preview
        </span>
      </div>
      <div className='flex flex-wrap gap-10 my-10 px-5 '>
        {arr.map((fruit, index) => {
          console.log(fruit);
          return <Tile key={index} fr={fruit} />
        })}
      </div>
      <div className='flex justify-center mb-10'>
        <button className='bg-orange-400 border-2 border-orange-900 rounded-full ' onClick={handleUploadClick}>Upload</button>
      </div>
    </>
  )
}

export default Preview