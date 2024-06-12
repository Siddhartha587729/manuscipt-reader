import Lottie from "lottie-react";
import '../Styles/login.css';
import login from "../images/login.json"
import script from '../images/navLogo.svg'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    return (
        <div className='flex justify-center items-center'>
            <div className='h-screen w-[70%] p-8 flex gap-5 '>
                <div className='w-1/2 bg-blue-300 h-full rounded-3xl p-5 flex'>
                    <Lottie animationData={login} />

                </div>
                <div className='w-1/2 h-full flex flex-col p-5 '>
                    <div className='h-1/6 flex gap-2 justify-center'>
                        <img src={script} className="h-7" alt="" />
                        <span className='text-xl font-serif '>Manuscript</span>
                    </div>
                    <div className="h-4/6 flex flex-col gap-4 justify-center items-center">
                        <div className="flex gap-3 flex-col justify-center items-center">
                            <span className="font-serif text-3xl">Welcome Back</span>
                            <span className="text-sm">Enter your email and password to access your account</span>
                        </div>
                        <div className="w-full">
                            <form className="flex justify-start items-start">
                                <label htmlFor="useremail" className="">Email</label>
                                <input type="text" className="m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100" />
                                <label htmlFor="userpwd" className="">Password</label>
                                <input type="text" className="m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100" />
                                <div className="w-full flex justify-between">
                                    <div>
                                        <input type="checkbox" />
                                        <label htmlFor=""> Remember me</label>
                                    </div>
                                    <div className="font-bold">
                                        <Link to="/">Forgot Password</Link>
                                    </div>
                                </div>
                                <button type="button" class="w-full mt-5 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >Log In</button>
                                <button className=" flex justify-center items-center gap-3 w-full bg-gray-50 rounded-xl"><FaGoogle />Log In with Google</button>
                            </form>
                        </div>
                    </div>
                    <div className="h-1/6 flex justify-center items-end">
                        <span>Don't have an account? <span className="font-bold"><Link to="/signup">Sign Up </Link></span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
