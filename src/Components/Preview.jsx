import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tile = ({ fr }) => {
  return (
    <div className='relative group h-56 w-[210px] bg-slate-200 border-2 border-black overflow-hidden'>
      <div className='bg-gray-600 w-full h-56 flex justify-center items-center absolute opacity-0 group-hover:opacity-50 transition-opacity'>
        <h1 className='text-white'>fhf</h1>
      </div>

      <div className='relative z-10'>
        <p className='text-center'>{fr}</p>
      </div>
    </div>
  );
};



const Preview = () => {
    const arr =['apple','mango','grapes','ghuiyan']
    const navigate = useNavigate();
    const handleUploadClick = ()=>{
        navigate("/upload")
    }

  return (
    <>
        <div className='my-6 flex justify-center'>
            <h1 className='text-3xl font-medium text-[#15133C]'><span className='text-orange-600 font-extrabold'>P</span>review</h1>
        </div>
        <div className='flex flex-wrap gap-10 my-10 px-5 '>
            {arr.map((fruit,index)=>{
                console.log(fruit);
                return <Tile key={index} fr={fruit}/>
            })}
        </div>
        <div className='flex justify-center mb-10'>
            <button className='bg-orange-400 border-2 border-orange-900 rounded-full ' onClick={handleUploadClick}>Upload</button>
        </div>
    </>
  )
}

export default Preview