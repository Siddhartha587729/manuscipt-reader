import React from 'react'
import mem1 from '../images/sid.jpg'
import otani from '../images/otani.png'
import kiit from '../images/kiit.png'
import Lottie from "lottie-react";
import team from '../images/team.json'

function Team() {
    const style={
        width:'100px'
    }
    return (
        <div className='flex-col gap-5 p-5'>
            <div className='h-1/4 flex-col'>
                <div className='flex justify-center mb-6'>
                    <Lottie style={style} animationData={team}/>
                </div>
                <div className='flex justify-center text-4xl font-semibold'>Our Team is like no other.</div>
                <div className='flex justify-center items-center mt-8 text-center '>
                    <span className='sm:w-[60rem]'>
                        Decription Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ex nobis consequuntur doloremque ab ratione a soluta assumenda maiores, illum omnis voluptatem veritatis dolorem excepturi.
                    </span>
                </div>
            </div>
            <div className='mt-14 h-3/4 flex-col items-center'>
                <div className='flex h-auto items-center justify-center '>
                    <div className='flex sm:h-full w-full sm:w-[80%] '>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl translate-y-12 hover:scale-105 hover:shadow-lg duration-200 '><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl hover:scale-105 hover:shadow-lg duration-200'><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl translate-y-12 hover:scale-105 hover:shadow-lg duration-200'><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl hover:scale-105 hover:shadow-lg duration-200'><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl translate-y-12 hover:scale-105 hover:shadow-lg duration-200'><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                        <div className='w-1/6 flex justify-center p-2'> <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl hover:scale-105 hover:shadow-lg duration-200'><img src={mem1} alt="Displayed Content" className="w-full h-full object-cover rounded-2xl" /></div></div>
                    </div>
                </div>
                <div className='flex justify-evenly mt-20 gap-10 '>
                    <div className='h-full rounded-2xl flex justify-center items-center'><img width={200} src={kiit} alt="" /></div>
                    <div className='h-full rounded-2xl flex justify-center items-center'><img width={300} src={otani} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Team