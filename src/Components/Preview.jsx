import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { client } from '../client';
import { fetchuser } from '../utils/data';
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Tile = ({ index, item }) => {
  const url = item.coverImage.asset.url
  /* console.log(item) */
  return (
    <div class="w-1/3 lg:w-1/6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col">
      <Link to="#" className='flex-grow'>
        <img class="rounded-t-lg h-1/3 w-full object-cover hover:scale-105 hover:shadow-lg" src={url} alt="cover" />
      </Link>
      <div class="p-5 flex-grow">
        <Link to="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='text-gray-500'>Title: </span>{item.title}</h5>
        </Link>
        <p 
          class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li><span className='text-gray-500'>Author: </span>{item.author}</li>
              <li><span className='text-gray-500'>Username: </span>{item.username}</li>
              <li><span className='text-gray-500'>Created At: </span>{item._createdAt}</li>
            </ul>
            </p>
        <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>

  );
};



const Preview = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(fetchuser);
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <>
      <div className='my-10 flex justify-center'>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl " >Collection</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5 my-10 px-5 '>
        {data.map((item, index) => (
          <Tile key={index} item={item} />
        ))}
      </div>
      <div className='flex justify-center mb-10'>
        <button
          className='flex justify-center items-center gap-2 bg-blue-700 hover:bg-orange-400 border-2 border-orange-900 rounded-full hover:scale-105 text-white'
          onClick={handleUploadClick}
        >
          Upload New<MdOutlineCreateNewFolder size="30px" />
        </button>
      </div>
    </>
  );
};

export default Preview;
