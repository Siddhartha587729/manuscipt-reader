import "../Styles/create.css"
import { MdCloudUpload } from "react-icons/md";
import { Form } from 'react-router-dom'

function Create(){
    return (
    <div className="create">
        <div className="create-desc">
            <h1 className='create-desc-header text-4xl cursor-pointer hover:text-orange-600'> Description </h1>
            <p className='create-desc-body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nisi id pariatur quaerat, porro tempore aut asperiores? 
                Impedit molestias iure minus quos quas beatae magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore 
                expedita culpa aperiam velit nemo dolores explicabo, obcaecati aliquam earum, iure illo atque temporibus voluptatum cumque!
            </p>
        </div>
        <div className="create_form">
            <Form className='create-form-r' method="POST" encType='multipart/form-data'>
                <label htmlFor="newImage" className="drop-container" id="dropcontainer">
                <span className="drop-title">Drop files here</span>
                or
                <input type="file" name='newImage' id='newImage' accept='.jpeg, .png, .jpg' required/>
                <button type='submit' className='create-form-btn'>upload<MdCloudUpload /></button> 
                </label>
            </Form>
        </div>
        <div className="create-step">
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, suscipit.</p> */}
        </div>
    </div>
  )
}

export default Create