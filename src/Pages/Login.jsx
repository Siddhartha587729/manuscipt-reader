import { useState } from 'react';
import '../Styles/login.css'

const Login = () => {
    const [toggle, setToggle]=useState(true);
    return (
        <div className="body"> 
            <div className={toggle ? "container" : "container right-panel-active" }>
                <div className="sign-up">
                    <form action="#">
                        <h1 className="login">Create Account</h1>
                        <div className="social">
                            <a href="" className="social_ions"><i className="fa-brands fa-facebook" style={{color: "#111927"}}></i></a>
                            <a href="" className="social_ions"><i className="fa-brands fa-google" style={{color: "#111927"}}></i></a>
                            <a href="" className="social_ions"><i className="fa-brands fa-instagram" style={{color: "#111927"}}></i></a>
                        </div>
                        <p className="loginp">Or Sign-Up Using EmailID for Resgistration</p>
                        <input className="input_form" type="text" name="email"  placeholder="Enter your EmailID" required />
                        <input className="input_form" type="text" name="Username"  placeholder="Enter your Username" required />
                        <input className="input_form" type="text" name="Password"  placeholder="Enter your Password" required />
                        <button className="formbtn">Sign-Up</button>
                    </form>
                </div>
                <div className="sign-in">
                    <form action="#">
                        <h1 className="login"> Login With</h1>
                        <div className="social">
                            <a href="" className="social_ions"><i className="fa-brands fa-facebook fa-lar" style={{color: "#111927", padding: "8px"}}></i></a>
                            <a href="" className="social_ions"><i className="fa-brands fa-google fa-lar" style={{color: "#111927", padding: "8px"}}></i></a>
                            <a href="" className="social_ions"><i className="fa-brands fa-instagram fa-lar" style={{color: "#111927", padding: "8px"}}></i></a>
                        </div>
                        <p className="loginp">Or Login In Using Email-ID</p>
                        <input className="input_form" type="text" name="email"  placeholder="Enter your EmailID" required />
                        <input className="input_form" type="password" name="Password"  placeholder="Enter your Password" required />
                        <button className="formbtn">Sign-In</button>
                    </form>
                </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1 className="login">Welcome Back!</h1>
                        <p className="loginp">To Access your Account Please Enter your Credentials</p>
                        <button className="formbtn" id="signin" onClick={()=> setToggle(true)}>Sign Up</button>
                    </div>
                    <div className="overlay-right">
                        <h1 className="login">Hey There Welcome To Our Community </h1>
                        <p className="loginp">Unlock Execlusive Benefits,Let's Embark on This Journey Together!!</p>
                        <button className="formbtn" id="signup" onClick={()=> setToggle(false)}>Login</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )}
export default Login;