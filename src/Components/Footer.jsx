import "../Styles/footer.css"
import { Link } from "react-router-dom"
import script from '../images/navLogo.svg'
import {  } from '@heroicons/react/24/solid'
/* import script from '../images/navLogo.svg' */
/* import copr from "../images/copr.svg" */

const Footer = () => {


  return (
    <>
      <div className="bg-slate-200 w-full mt-10 ">
        <div className="h-40 p-3 flex items-center flex-col gap-2 justify-center">
          <Link to="/"><img src={script} alt="my logo" width="50" height="50" /></Link>
          <span className="font-medium text-xl">Manuscript Reader</span>
          <div className="flex gap-3">
              <div className=" cursor-pointer flex justify-center items-center border-solid border-2 border-black p-1 rounded-full hover:border-none ">
                <i className="fa-brands fa-github "></i>
              </div>
              <div className="cursor-pointer flex justify-center items-center border-solid border-2 border-black p-1 rounded-full hover:border-none">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="cursor-pointer flex justify-center items-center border-solid border-2 border-black p-1 rounded-full hover:border-none ">
                <i className="fa-brands fa-twitter "></i>
              </div>
          </div>
        </div>
        <div className="font-light bg-slate-300 h-12 w-full flex justify-center items-center text-sm lg:text-base">
          <span>
            copyright @2023 Manuscript reader, Design by 
            <span className="text-green-600 cursor-pointer"> KIIT University Student </span> 
            in collaboration with 
            <span className="text-red-700 cursor-pointer"> Otani university, Japan</span> 
            </span>
        </div>
      </div>
    </>
  )
}

export default Footer