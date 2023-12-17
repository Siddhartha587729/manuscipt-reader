import React from 'react'
import UploadForm from './UploadForm'

const Tile= ({fr}) =>{
    return (
        <div className='h-10 w-10 bg-slate-900 border-2 border-black'>
            <p>{fr}</p>
        </div>
    )
}

const Preview = () => {
    const arr =['apple','mango','grapes']
  return (
    <>
        <h1>upload</h1>
        <div>
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