import "../Styles/footer.css"
import { Link } from "react-router-dom"
/* import script from '../images/navLogo.svg' */
import { } from '@heroicons/react/24/solid'
import { FaScroll } from "react-icons/fa6";
/* import script from '../images/navLogo.svg' */
/* import copr from "../images/copr.svg" */

const Footer = () => {


  return (
    <>
        <footer className="bg-gray-900 rounded-lg shadow m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link to="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <FaScroll size={40} color="white"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Manuscript Reader</span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                <li>
                  <Link to="/team" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                  <Link to="https://github.com/Siddhartha587729/manuscipt-reader" target="_blank" className="hover:underline me-4 md:me-6">Github</Link>
                </li>

              </ul>
            </div>

            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-400 sm:text-center">© 2023 <Link to="#" className="hover:underline">Manuscript Reader</Link>. Design by KIIT University Student's in collaboration with  Otani university, Japan.</span>
          </div>
        </footer>

    </>
  )
}

export default Footer