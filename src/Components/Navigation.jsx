import React from 'react'
import { Link } from 'react-router-dom'
import script from '../images/navLogo.svg'
import '../Styles/nav.css'
import { useNavigate } from 'react-router-dom'


function Navigation() {
    const navigate = useNavigate();
    const loginButton = ()=>{
        navigate("/login")
    }
  return (
    <nav>
        <div className="logo">
            <Link to="/"><img src={script} alt="my logo" width="50" height="50"/></Link>
        </div>
        <div className="nav_list">
            <div className="nav-list-1">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-list-1">
                <Link to="/">Contact us</Link>
            </div>
            <div className="nav-list-btn">
                <button className="btn-login" onClick={loginButton}>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navigation