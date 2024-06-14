import Lottie from "lottie-react";
import '../Styles/signup.css';
import signup from "../images/signup.json";
import script from '../images/navLogo.svg';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CiCircleInfo } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../client';
import bcrypt from "bcryptjs-react"


const USER_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [role, setRole] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd && matchPwd !== '');
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        console.log(user)
        console.log(pwd)
        console.log(role)
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const query = '*[_type == "user" && email == $email]';
            const params = { email: user };
            const existingUsers = await client.fetch(query, params);

            if (existingUsers.length > 0) {
                setErrMsg("User already exists")
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                return { error: 'User already exists' };
            }

            const hashedPwd = await bcrypt.hash(pwd, 10);
            const doc = {
                _type: 'user',
                email: user,
                password: hashedPwd,
                role: role
            };
            const response = await client.create(doc);
            console.log(response?.data);
            console.log(response?.accessToken);
            const data = JSON.stringify(response)
            console.log(data);
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }

        }
    };
    useEffect(() => {
        if (errMsg) {
            toast.error(errMsg);
        }
    }, [errMsg]);


    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to="#">Sign In</Link>
                    </p>
                </section>
            ) : (
                <div className='flex justify-center items-center'>
                    <ToastContainer />
                    <div className='h-screen w-[70%] p-8 flex gap-5'>
                        <div className='w-1/2 bg-blue-300 h-full rounded-3xl p-5 flex'>
                            <Lottie animationData={signup} />
                        </div>
                        <div className='w-1/2 h-full flex flex-col p-5'>
                            <div className='h-1/6 flex gap-2 justify-center'>
                                <img src={script} className="h-7" alt="Logo" />
                                <span className='text-xl font-serif'>Manuscript</span>
                            </div>
                            <div className="h-4/6 flex flex-col gap-4 justify-center items-center">
                                <div className="flex gap-3 flex-col justify-center items-center">
                                    <span className="font-serif text-3xl">Welcome Visitor</span>
                                    <span className="text-sm">Enter the following details to create your account with us</span>
                                </div>
                                <div className="w-full">
                                    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start">
                                        <label htmlFor="useremail" className="flex items-center gap-2">
                                            Email <FaCheck color="green" className={validName ? "valid" : "hide"} /><RxCross2 color="red" className={validName || !user ? "hide" : "invalid"} />
                                        </label>
                                        <input
                                            type="text"
                                            id="useremail"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                            className="m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100"
                                        />
                                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                            <CiCircleInfo />
                                            4 to 24 characters.<br />
                                            Must begin with a letter.<br />
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>
                                        <label htmlFor="userpwd" className="flex items-center gap-2">
                                            Password <FaCheck color="green" className={validPwd ? "valid" : "hide"} /><RxCross2 color="red" className={validPwd || !pwd ? "hide" : "invalid"} />
                                        </label>
                                        <input
                                            type="password"
                                            id="userpwd"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                            className="m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100"
                                        />
                                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                            <CiCircleInfo />
                                            8 to 24 characters.<br />
                                            Must include uppercase and lowercase letters, a number, and a special character.<br />
                                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>
                                        <label htmlFor="userconfirmpwd" className="flex items-center gap-2">
                                            Confirm Password <FaCheck color="green" className={validMatch && matchPwd ? "valid" : "hide"} /><RxCross2 color="red" className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                        </label>
                                        <input
                                            type="password"
                                            id="userconfirmpwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            required
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                            className="m-2 p-5 rounded-xl h-[50px] w-full bg-slate-100"
                                        />
                                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                            <CiCircleInfo />
                                            Must match the first password input field.
                                        </p>
                                        <div className="w-full flex justify-around">
                                            <span className="font-bold">Role:</span>
                                            <label htmlFor="roleAdmin">
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    id="roleAdmin"
                                                    value="administrator"
                                                    checked={role === 'administrator'}
                                                    onChange={(e) => setRole(e.target.value)}
                                                    required
                                                /> Administrator
                                            </label>
                                            <label htmlFor="roleStudent">
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    id="roleStudent"
                                                    value="student"
                                                    checked={role === 'student'}
                                                    onChange={(e) => setRole(e.target.value)}
                                                    required
                                                /> Student
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!validName || !validPwd || !validMatch}
                                            className="w-full mt-5 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Sign Up
                                        </button>
                                        <button
                                            className="flex justify-center items-center gap-3 w-full bg-gray-50 rounded-xl"
                                        >
                                            <FaGoogle /> Sign Up with Google
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="h-1/6 flex justify-center items-end">
                                <span>Already have an account? <span className="font-bold"><Link to="/login">Log In</Link></span></span>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Login;
