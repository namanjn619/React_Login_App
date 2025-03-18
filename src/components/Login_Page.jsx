import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const Login_Page = () => {
    return (
        <div className="lp-main-container">
            <div className="lp-top-container">
                <h1>Quora</h1>
                {/* <img src="/q-logo.png" alt="quora-logo" /> */}
                <p>A place to share knowledge and better understand the world</p>
            </div>
            <div className="lp-middle-container">
                <div className="lp-middle-container-left">
                    <div className="lp-middle-container-left-text-container1">
                        <p>By continuing you indicate that you agree to Quora's <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                    </div>
                        <div className="lp-middle-container-left-text-container2">
                            <button className="btn-cont2"><FcGoogle size={25}/><span>Continue with Google</span></button>
                            <button className="btn-cont2"><FaFacebook size={25}/><span>Continue with Facebook</span></button>
                        </div>
                    <div className="lp-middle-container-left-text-container3">
                        <button className="btn-cont3">Sign up with email</button>
                    </div>
                </div>  
                <div className="lp-middle-container-right">
                    <div className="lp-middle-container-right-text-container1">
                        <h3>Login</h3>
                    </div>
                    <div className="lp-middle-container-right-text-container2">
                        <form action="">
                            <label className="label-cont" htmlFor="email">Email</label><br/>
                            <input className="input-cont" type="text" id="email" name="email" placeholder="Your email"/><br/>
                            <label className="label-cont" htmlFor="password">Password</label><br/>
                            <input className="input-cont" type="password" id="password" name="password" placeholder="Your password"/><br/>
                            <div className="lp-middle-container-right-text-container3">
                                <a href="">Forgot password?</a>
                                <button className="btn-cont4" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="lp-bottom-first-container">
                <h1><a href="">हिन्दी</a> <IoIosArrowForward size={15} /></h1>
            </div>
            <div className="lp-bottom-second-container">
                <h1><a href="">About</a><LuDot size={10}/><a href="">Careers</a><LuDot size={10}/><a href="">Privacy</a><LuDot size={10}/><a href="">Terms</a><LuDot size={10}/><a href="">Contact</a><LuDot size={10}/><a href="">Languages</a><LuDot size={10}/><a href="">Your Ad Choices</a><LuDot size={10}/><a href="">Press</a> © Quora, Inc. 2025</h1>
            </div>
        </div>
    )
}

export default Login_Page;
