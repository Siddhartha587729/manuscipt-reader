import Lottie from "lottie-react";
import login from "../images/login.json";
import script from '../images/navLogo.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect} from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../client';
import bcrypt from "bcryptjs-react";
import { generateAccessToken, generateRefreshToken, verifyToken } from '../utils/jwt'

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const query = '*[_type == "user" && email == $email]';
            const params = { email: user };
            const existingUsers = await client.fetch(query, params);
            if (existingUsers.length === 0) {
                setErrMsg("User does not exist");
                return;
            }
            const validPwd = await bcrypt.compare(pwd, existingUsers[0].password);
            const userData = existingUsers[0];
            if (!validPwd) {
                setErrMsg("Incorrect password");
                return;
            }
            const accessToken = await generateAccessToken({ user, pwd })
            const refreshToken = await generateRefreshToken({ user, pwd })

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            toast.success("Login successful!");
            setAuth({ user, pwd, role: userData.role, accessToken });
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 2000);
        } catch (err) {
            setErrMsg('Login Failed');
        }
    };

    const refreshToken = async () => {
        try {
            const token = localStorage.getItem('refreshToken')
            const payload = await verifyToken(token);
            if (!payload) {
                setErrMsg("Invalid token")
                return;
            }
            const newAccessToken = await generateAccessToken({ user: payload.user, pwd: payload.pwd })
            if (!newAccessToken) {
                setErrMsg("Invalid token")
                return;
            }
            localStorage.setItem('accessToken', newAccessToken);
        } catch (err) {
            console.error('Unable to refresh token', err);
        }
    };

    useEffect(() => {
        if (errMsg) {
            toast.error(errMsg);
        }
    }, [errMsg]);

    useEffect(() => {
        const interval = setInterval(() => {
            refreshToken();
        }, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <ToastContainer />
            <div className='h-screen w-full md:w-[70%] p-8 flex flex-col lg:flex-row gap-5 '>
                <div className='w-full lg:w-1/2 bg-blue-300 h-full rounded-3xl p-5 flex'>
                    <Lottie animationData={login} />
                </div>
                <div className='w-full lg:w-1/2 h-full flex flex-col p-5 '>
                    <div className='h-1/6 flex gap-2 justify-center'>
                        <img src={script} className="h-7" alt="Logo" />
                        <span className='text-xl font-serif '>Manuscript</span>
                    </div>
                    <div className="h-4/6 flex flex-col gap-4 justify-center items-center">
                        <div className="flex gap-3 flex-col justify-center items-center">
                            <span className="font-serif text-3xl">Welcome Back</span>
                            <span className="text-sm text-center">Enter your email and password to access your account</span>
                        </div>
                        <div className="w-full md:w-[80%]">
                            <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center">
                                <label htmlFor="useremail" className="flex items-start justify-start w-full">Email</label>
                                <input
                                    type="email"
                                    className="md:m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                                <label htmlFor="userpwd" className="flex items-start justify-start w-full">Password</label>
                                <input
                                    type="password"
                                    className="md:m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <div className="w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-1 justify-between">
                                    <div>
                                        <input type="checkbox" />
                                        <label htmlFor="" className=" text-sm md:text-lg"> Remember me</label>
                                    </div>
                                    <div className="font-bold text-sm md:text-lg">
                                        <Link to="/unauthorized">Forgot Password</Link>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-5 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    Log In
                                </button>
                                <button className="hidden md:flex justify-center items-center gap-3 w-full bg-gray-50 rounded-xl">
                                    <FaGoogle />Log In with Google
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="h-1/6 mt-2 md:mt-4 flex justify-center items-end text-center">
                        <span>Don't have an account? <span className="font-bold"><Link to="/signup">Sign Up </Link></span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
