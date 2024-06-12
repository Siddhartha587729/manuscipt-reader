import React from 'react'
import { Link} from 'react-router-dom'
import script from '../images/navLogo.svg'
import '../Styles/nav.css'
import { useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate();

    const loginButton = () => {
        navigate("/signup")
    }
    return (
        <nav className='px-4 my-5  '>
            <div className='flex gap-2'>
                <div className="logo">
                    <Link to="/"><img src={script} alt="my logo" width="50" height="50" /></Link>
                </div>
                <span className="hidden lg:inline self-center text-2xl font-semibold whitespace-nowrap ">Manuscript Reader</span>
            </div>
            <div className="nav_list gap-4 ">
                <div className="nav-list-1 ">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-list-1">
                    <Link to="/team">About us</Link>
                </div>
                <div className="nav-list-btn">
                    <button className="btn-login" onClick={loginButton}>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation