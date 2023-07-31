import React, { useState } from 'react'
import "../Styles/create.css"
import {ArrowUpTrayIcon} from "@heroicons/react/24/solid"
import { Form,Link,Outlet } from 'react-router-dom'
import axios from 'axios'
function Create() {    
    const [file, setfile]=useState();
    const handleupload=(e)=>{
        const formdata= new FormData()
        formdata.append('file',file)
        axios.post('http://localhost:4000/upload',formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err.message))
    }

    return (
    <div className="create">
        <div className="create-desc">
            <h1 className='create-desc-header'> Description </h1>
            <p className='create-desc-body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nisi id pariatur quaerat, porro tempore aut asperiores? 
                Impedit molestias iure minus quos quas beatae magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore 
                expedita culpa aperiam velit nemo dolores explicabo, obcaecati aliquam earum, iure illo atque temporibus voluptatum cumque!
            </p>
        </div>
        <div className="create-form">
                <label htmlFor="newImage">Add new image</label>
                <input type="file" name='newImage' id='newImage' onChange={(e=> setfile(e.target.files[0]))} required/>
                <label htmlFor="temp">this is temp</label>
                <input type="text" name='temp' required/>
                <button type='submit' className='create-form-btn' onClick={handleupload}>upload<ArrowUpTrayIcon width={20}/></button>
        </div>
        <div className="create-step">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, suscipit.</p>
        </div>
    </div>
  )
}

export default Create