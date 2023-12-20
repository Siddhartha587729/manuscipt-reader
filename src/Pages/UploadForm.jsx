import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { client } from '../client';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const [data, setData] = useState();
  const [coverPic, setCoverPic] = useState(null);
  const [title, setTitle] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [imageAsset, setImageAsset] = useState();
  const navigate = useNavigate();

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

  console.log(data);

  const handleCoverPic = (e) => {
    const file = e.target.files[0];
    if (
      file.type === 'image/png' ||
      file.type === 'image/jpg' ||
      file.type === 'image/gif' ||
      file.type === 'image/svg' ||
      file.type === 'image/tiff' ||
      file.type === 'image/jpeg'
    ) {
      client.assets.upload('image', file, { content: file.type, filename: file.name }).then((doc) => {
        setImageAsset(doc);
      });
    } else {
      console.error('Wrong Image Type');
    }

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
    console.log(imageAsset?._id);
    if (formData.author && formData.title && formData.organisation && imageAsset?._id) {
      const doc = {
        _type: 'author',
        username: 'Sahil Kumar',
        author: formData.author,
        title: formData.title,
        organisation: formData.organisation,
        image: 'aksdaksdhakbd',
        coverImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id,
          },
        },
      };
      client.create(doc).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col md:flex-row justify-around gap-8 m-4 items-center">
        <div className="flex flex-col space-y-2">
          <div className="border-dotted border h-80 w-80 relative">
            {!imageAsset ? (
              <>
                <label htmlFor="file" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-2xl mt-10 py-10">
                        <AiOutlineCloudUpload />
                      </p>
                      <p className="text-lg">Click to Upload</p>
                    </div>
                  </div>
                </label>
                <input type="file" id="file" name="file" onChange={handleCoverPic} className="hidden" />
              </>
            ) : (
              <div className="relative h-full">
                <img src={imageAsset?.url} className="w-full h-full" alt="uploaded-pic" />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none"
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
          <div className="text-gray-500 flex flex-col justify-center items-start">
            <p>Uploaded by :</p>
            <p>Date of upload :</p>
            <p>Time of upload :</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-96 ">
          <form onSubmit={handleSubmit} className="h-fit border border-gray-300 p-4 space-y-4">
            <div className="mb-2">
              <label htmlFor="author" className="text-sm">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                placeholder="Write the Author"
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full text-sm"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
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
              <label htmlFor="organisation" className="text-sm">
                Organisation
              </label>
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
              <label htmlFor="excelFile" className="text-sm">
                Upload Excel
              </label>
              <input
                type="file"
                id="excelFile"
                name="excelFile"
                accept=".xlsx"
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
