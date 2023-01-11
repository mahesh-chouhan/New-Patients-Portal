import React from "react";
import "../Styles/Login.css";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import  sikkaLogo from '../../assets/sikkaLogo.png';
import LoginFooter from "./LoginFooter";
import { Link, useNavigate } from "react-router-dom";
function Login() {
const navigate = useNavigate();
    const HandleClick =()=>{
    navigate('./Home');
    }

  return (
    <div className="login-body">
    <div className="container Login_auth_container">
      <div className="row">
        <div className="col-md-6 login-left-column col d-flex align-items-center justify-content-center">
          <div className="m-5">
            {/* <img src="http://localhost:3002/static/media/GraphicPatternforLogin.2479f541a24ae2918640.svg" alt="" /> */}

            <h1>Welcome To <br></br> patient Home Page</h1>
          </div>
        </div>
        <div className="col-md-6 Login-Page">
        <div className="w-100 mb-5">
                <form className="login-form">
                    <div className="text-center mb-5 mt-3">
                  <img src={sikkaLogo} />
                        
                    </div>
                    <div className="input-group flex-nowrap mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc" }}>
                            <FaUserAlt
                            size={20}
                            style={{ color: "#6e1da2" }}
                            />
                        </span>
                        <input
                            type="text"
                            className="form-control w-100"
                            placeholder="Username"
                            name="username"
                            
                            required
                            />
                    </div>
                    <div className="input-group flex-nowrap position-relative mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc" }}>
                        <AiFillLock
                        size={20}
                        style={{ color: "#6e1da2" }}
                        />
                        </span>
                        <input
                            type='password'
                            className="form-control w-100"
                            placeholder="Password"
                            name="password"
                            
                            required
                            />
                    </div>

                    <div className="mb-4">
                        <input
                            type="checkbox"
                            className="me-2 Remember"
                            
                            style={{ border: "1px solid #ced4da",  marginTop:"-15px" }}
                            />
                        Remember me
                        <button  className=" btn button__text" onClick={HandleClick}>Login
                           </button>
                        </div>
                                <div className="mt-5 signup">
			           Don't have an account?
                    <a href="#">Sigup</a>
				</div>
                <div className="mt-3 text-center signup">
                    <a href="#">Forgot Your Password</a>
                </div>
                
                            
                       
                </form>
            </div>
        </div>


        
      </div>
    </div>
      <LoginFooter />
</div>
  );
}

export default Login;
