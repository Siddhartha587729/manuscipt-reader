import React from 'react'

const Tile = ({ fr }) => {
  return (
    <div className='relative group h-52 w-full sm:w-[200px] md:w-[210px] lg:w-[250px] xl:w-[250px] bg-slate-200 border-2 border-black overflow-hidden'>
      {/* Invisible div */}
      <div className='bg-gray-600 w-full h-52 flex justify-center items-center absolute opacity-0 group-hover:opacity-50 transition-opacity'>
        <h1 className='text-white'>fhf</h1>
      </div>

      {/* Visible div */}
      <div className='relative z-10'>
        <p className='text-center'>{fr}</p>
      </div>
    </div>
  );
};



const Preview = () => {
    const arr =['apple','mango','grapes','ghuiyan']
  return (
    <>
        <div className='my-6 flex justify-center'>
            <h1 className='text-3xl font-medium text-[#15133C]'><span className='text-orange-600 font-extrabold'>P</span>review</h1>
        </div>
        <div className='flex flex-wrap gap-10 my-10 px-10 '>
            {arr.map((fruit,index)=>{
                console.log(fruit);
                return <Tile key={index} fr={fruit}/>
            })}
        </div>
        <button className='bg-orange-400 border-2 border-orange-900 rounded-full'>Upload</button>
        
    </>
  )
}

export default Preview