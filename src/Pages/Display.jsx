import "../Styles/Display.css"
import { useEffect, useState } from "react"
import { client } from '../client'
import { fetchData, fetchUserById, fetchuser } from "../utils/data";
import { useParams } from "react-router-dom";
const Section = ({item})=>{
  return(
    <div className='rounded-lg bg-gray-100 mt-5 flex flex-col h-[500px] overflow-y-auto'>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Genre:  ${item.genre}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Title:  ${item.title}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Class ID: ${item.classId}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Page : ${item.pageNo}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`CPD: ${item.CPD}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Language: ${item.language}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Letters: ${item.letters}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Number of Plam leaves: ${item.noOfPlamLeaves}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Details of Folios: ${item.details}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Folio No. : ${item.folio_number}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Size: ${item.size}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Hole Position: ${item.hole_position}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Paints: ${item.paints}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Condition: ${item.condition}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Line: ${item.line}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Dimmentions: ${item.dimmentions}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Density of Letters: ${item.density}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Beginning: ${item.begining}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`End: ${item.end}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Colophone: ${item.coloPhone}`} </p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Notes: ${item.notes}`}</p>
            <p className="border-soild border-4 border-black p-2 rounded-lg mb-2 ml-4">{`Remarks: ${item.remarks}`} </p>
          </div>
  )
}
function Display() {
  const {id}= useParams();
  const [image, setImage] = useState();
  const [data,setData] = useState();
  const [userInfo,setUserInfo] = useState([]);
  const [pageno, setPageno] = useState(1);
  useEffect(()=>{
    client.fetch(fetchData(id))
    .then((doc)=>{
      setData(doc);
    })
    client.fetch(fetchUserById(id))
          .then((res)=>{
            setUserInfo(res);
          })

  },[])
  const totalPage = data?.length
  const handlePageChangedec = () => {
    if(pageno>1){
      setPageno(pageno - 1);
    }
  };
  const handlePageChangeinc = () => {
    if(pageno<totalPage){
      setPageno(pageno + 1);
    }
  };
  return (
    <>
      <div className="flex justify-around mt-10">
        <button onClick={handlePageChangedec} > &lt; Prev</button>
        <div className="flex items-center">
          <span>{pageno}/{totalPage}</span>
        </div>
        <button onClick={handlePageChangeinc}>Next &gt;</button>
      </div>
      <div className="h-[600px] flex flex-col md:flex-row justify-around gap-4 lg:gap-8 mx-4 lg:mx-10 items-start">
        <div className="w-1/2 md:w-1/3 border-black border-2 h-[550px] p-2">
          <div className="flex justify-center items-center border-2 border-dotted border-black h-2/3">
            <img src={userInfo[0]?.coverImage?.asset?.url} alt="N/A" />
          </div>
          <div className="mt-10 text-gray-500 flex flex-col justify-center items-start">
            {userInfo ? (
              <>
              <p>{`Uploaded by : ${userInfo[0]?.username}`}</p>
              <p>{`Date of upload : ${userInfo[0]?._createdAt}`}</p>
              <p>{`Title : ${userInfo[0]?.title}`}</p>
              <p>{`Organisation : ${userInfo[0]?.organisation}`}</p>
              <p>{`Author : ${userInfo[0]?.author}`}</p>
              </>
            ) : (
              <h2>Error While Fetching Userinfo</h2>
            )}    
          </div>
        </div>
        <div className="w-1/2 md:w-2/3 border-black border-2 h-[550px]">
            {data ? (
                <Section item={data[pageno-1]}/>
              ) : (
                  <p>Data Not Fetched</p>
                )}
        </div>
      </div>
    </>
  )
}

export default Display