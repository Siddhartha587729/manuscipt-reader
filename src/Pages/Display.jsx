import "../Styles/Display.css";
import { useEffect, useState } from "react";
import { client } from '../client';
import { fetchData, fetchUserById } from "../utils/data";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Section = ({ item }) => {
  if (!item) {
    return <p>No item data available</p>;
  }

  return (
    <div className='rounded-lg flex flex-col h-full overflow-y-auto '>
      {Object.entries(item).map(([key, value]) => (
        <p className="bg-[#81b5e0] p-2 rounded-lg px-5 mb-2 ml-4" key={key}>
          {`${key.replace(/_/g, ' ').toUpperCase()}: ${value}`}
        </p>
      ))}
    </div>
  );
};

function Display() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [showFirstPages, setShowFirstPages] = useState(true);

  useEffect(() => {
    client.fetch(fetchData(id))
      .then((doc) => {
        setData(doc);
      });
    client.fetch(fetchUserById(id))
      .then((res) => {
        setUserInfo(res);
      });
  }, [id]);

  const totalPage = data.length;

  const handlePageChangedec = () => {
    if (pageno > 1) {
      setPageno(pageno - 1);
      if (pageno === 11) {
        setShowFirstPages(true);
      }
    }
  };

  const handlePageChangeinc = () => {
    if (pageno < totalPage) {
      setPageno(pageno + 1);
      if (pageno === 10) {
        setShowFirstPages(false);
      }
    }
  };

  const handlePageChange = (page) => {
    setPageno(page);
  };

  return (
    <div className="">
      <div className="flex justify-centre items-center mt-1">
        <div className="w-full flex justify-center items-center gap-8 mb-1">
          <button className="bg-red-600 rounded-full" onClick={handlePageChangedec}><FaArrowLeft /></button>
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 rounded-3xl p-1 px-2 flex items-center justify-center gap-2">
              {showFirstPages ? (
                <>
                  {Array.from({ length: Math.min(10, totalPage) }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`rounded-full  ${pageno === i + 1 ? 'bg-[#81b5e0] text-white' : ' hover:bg-gray-300'} text-gray-700 font-medium `}
                    >
                      {i + 1}
                    </button>
                  ))}
                  {totalPage > 10 && <span>...</span>}
                </>
              ) : (
                <>
                  {Array.from({ length: Math.min(10, totalPage - 10) }, (_, i) => (
                    <button
                      key={i + 11}
                      onClick={() => handlePageChange(i + 11)}
                      className={`rounded-full  ${pageno === i + 11 ? 'bg-[#81b5e0] text-white' : 'bg-gray-200 hover:bg-gray-300'} text-gray-700 font-medium `}
                    >
                      {i + 11}
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>
          <button className="bg-red-600 rounded-full" onClick={handlePageChangeinc}><FaArrowRight /></button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" border-2 border-dashed rounded-xl border-[#81b5e0] p-5 w-[90%] flex flex-col md:flex-row justify-around items-center gap-4 lg:gap-8 mx-4 lg:mx-10 ">
          <div className="w-1/2 md:w-1/3 flex justify-center items-center h-[550px] p-2">
            <div className="border-2 border-dashed border-[#C0D6E8] max-w-sm bg-[#81b5e0] rounded-lg shadow-xl">
              {userInfo[0]?.coverImage?.asset?.url ? (
                <img className="rounded-t-lg shadow-lg hover:scale-105 hover:shadow-xl" src={userInfo[0].coverImage.asset.url} alt="N/A" />
              ) : (
                <p>No Image Available</p>
              )}
              <div className="p-5">
                {userInfo.length > 0 ? (
                  <>
                    <p ><span className="font-bold">Uploaded by :</span> {`${userInfo[0]?.username}`}</p>
                    <p><span className="font-bold">Date of upload : </span>{`${userInfo[0]?._createdAt}`}</p>
                    <p><span className="font-bold">Title : </span>{`${userInfo[0]?.title}`}</p>
                    <p><span className="font-bold">Organisation : </span>{`${userInfo[0]?.organisation}`}</p>
                    <p><span className="font-bold">Author : </span>{`Author : ${userInfo[0]?.author}`}</p>
                  </>
                ) : (
                  <h2>Error While Fetching User Info</h2>
                )}
              </div>
            </div>

          </div>

          <div className="w-1/2 md:w-2/3 h-[550px]">
            {data.length > 0 ? (
              <Section item={data[pageno - 1]} />
            ) : (
              <p>Data Not Fetched</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
