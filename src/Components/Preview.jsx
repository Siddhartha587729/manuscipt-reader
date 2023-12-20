import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { client } from '../client';
import { fetchuser } from '../utils/data';

const Tile = ({ index, item }) => {
  console.log(item);
  const url = item.coverImage.asset.url
  //console.log(url)
  return (
    <Link to={`/display/${item._id}`}>
      {/* <Link to={`/display/${item._id}`}> */}
      <div className='relative group h-56 w-[210px] bg-slate-200 border-2 border-slate-300 overflow-hidden cursor-pointer'>
        <div className='bg-gray-600 w-full h-56 flex justify-center items-center absolute opacity-0 group-hover:opacity-50 transition-opacity'>
          <h1 className='text-white'>fhf</h1>
        </div>

        <div className='relative z-10'>
          <div className='h-56 w-full p-2'>
            <img src={url} alt="" className='h-full rounded-lg' />
          </div>
          {/* <p className='text-center'>{url}</p> */}
        </div>
      </div>
    </Link>
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


  /* console.log(data) */

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <>
      <div className='my-10 flex justify-center'>
        <span className='text-4xl cursor-pointer hover:text-orange-600'>
          Preview
        </span>
      </div>
      <div className='flex flex-wrap gap-10 my-10 px-5 '>
        {data.map((item, index) => (
          <Tile key={index} item={item} />
        ))}
      </div>
      <div className='flex justify-center mb-10'>
        <button
          className='bg-orange-400 border-2 border-orange-900 rounded-full '
          onClick={handleUploadClick}
        >
          Upload
        </button>
      </div>
    </>
  );
};

export default Preview;
