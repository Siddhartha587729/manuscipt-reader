import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import * as XLSX from 'xlsx';
// author
// upload date time
// title
// organisation
// upload cover pic
// upload excel
// 

const UploadForm = () => {
  const [data, setData] = useState();
  const handleFile=(e)=>{
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) =>{
          const data = e.target.result;
          const workBook= XLSX.read(data,{type: 'binary'});
          const sheetName = workBook.SheetNames[0];
          const sheet = workBook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          setData(parsedData);
        }
    }
  return (
    <>
            <button className='bg-orange-400 border-2 border-orange-900 rounded-full'>Upload</button>
    </>
  )
}

export default UploadForm