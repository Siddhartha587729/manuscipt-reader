import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const UploadForm = () => {
  const [data, setData] = useState();
  const [coverPic, setCoverPic] = useState(null);

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      const sheetName = workBook.SheetNames[0];
      const sheet = workBook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };

  const handleCoverPic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    organisation: '',
    coverNo: '',
    genre: '',
    classId: '',
    pageNo: '',
    cpd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, such as sending it to a server.
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-8 m-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="border-dotted border h-80 w-80 relative">
            {coverPic && (
              <img
                src={coverPic}
                alt="Cover Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
          <div className="text-gray-500 space-y-1">
            <p>Uploaded by :</p>
            <p>Date of upload :</p>
            <p>Time of upload :</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-96">
          <form onSubmit={handleSubmit} className="border border-gray-300 p-4 space-y-4">
            <div className="mb-2">
              <label htmlFor="author" className="text-sm">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="title" className="text-sm">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="organisation" className="text-sm">Organisation</label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="coverNo" className="text-sm">Cover No.</label>
              <input
                type="text"
                id="coverNo"
                name="coverNo"
                value={formData.coverNo}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="genre" className="text-sm">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="classId" className="text-sm">Class id</label>
              <input
                type="text"
                id="classId"
                name="classId"
                value={formData.classId}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="pageNo" className="text-sm">Page No.</label>
              <input
                type="text"
                id="pageNo"
                name="pageNo"
                value={formData.pageNo}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="cpd" className="text-sm">CPD</label>
              <input
                type="text"
                id="cpd"
                name="cpd"
                value={formData.cpd}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="coverPic" className="text-sm">Upload Cover Pic</label>
              <input
                type="file"
                id="coverPic"
                name="coverPic"
                onChange={handleCoverPic}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="excelFile" className="text-sm">Upload Excel</label>
              <input
                type="file"
                id="excelFile"
                name="excelFile"
                onChange={handleFile}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <button type="submit" className="bg-orange-400 border-2 border-orange-900 rounded-full py-2">
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
