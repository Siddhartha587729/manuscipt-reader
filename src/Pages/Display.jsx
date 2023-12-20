import "../Styles/Display.css"
import { useState } from "react"

function Display() {
  const [image, setImage] = useState();
  const [pageno, setPageno] = useState(1);

  const totalPage = 32

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
            <img src={image} alt="N/A" />
          </div>
          <div className="mt-10 text-gray-500 flex flex-col justify-center items-start">
            <p>Uploaded by :</p>
            <p>Date of upload :</p>
            <p>Time of upload :</p>
          </div>
        </div>
        <div className="w-1/2 md:w-2/3 border-black border-2 h-[550px]"></div>
      </div>
    </>
  )
}

export default Display