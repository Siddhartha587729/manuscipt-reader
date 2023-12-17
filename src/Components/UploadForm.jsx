import React from 'react'
import { Form } from 'react-router-dom'
/* 
author
upload date time
title
organisation
upload cover pic
upload excel
*/

const UploadForm = () => {
    
  return (
    <>
        <Form>
            <button className='bg-orange-400 border-2 border-orange-900 rounded-full'>Upload</button>
        </Form>
    </>
  )
}

export default UploadForm