import React from 'react'
import { Link } from 'react-router-dom'
import script from '../images/navLogo.svg'
import '../Styles/nav.css'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { FaCheck } from "react-icons/fa6";

function Navigation() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const loginButton = () => {
        navigate("/login")
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth(null);

        navigate('/login');

        return null;
    };

    return (
        <nav className='w-[380px] md:w-[770px] lg:w-auto px-4 my-5  '>
            <div className='flex gap-2'>
                <div className="logo">
                    <Link to="/"><img src={script} alt="my logo" width="50" height="50" /></Link>
                </div>
                <span className="hidden lg:inline self-center text-2xl font-semibold whitespace-nowrap ">Manuscript Reader</span>
            </div>
            <div className="nav_list gap-1 md:gap-4 ">
                {auth?.user ? (
                    <div className="bg-green-500 rounded-3xl p-2 px-3 ">
                        <span className='text-lg text-white flex gap-1 justify-center items-center'> {auth.role}<FaCheck color='white'/></span>
                    </div>
                ) : (
                    null
                )}
                <div className="nav-list-1 ">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-list-1">
                    <Link to="/team">About us</Link>
                </div>

                <div className="nav-list-btn">
                    {auth?.user ? (
                        <button className="btn-login" onClick={handleLogout}>Logout</button>
                    ) : (
                        <button className="btn-login" onClick={loginButton}>Login</button>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navigation