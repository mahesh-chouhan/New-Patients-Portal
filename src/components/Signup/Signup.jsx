import React, { useState } from "react";
import "../Styles/Login.css";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import  sikkaLogo from '../../assets/sikkaLogo.png';

import { Link, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";
function Signup() {
  const [state, setState] = useState({
    username: "",
    password: "",
  })
const navigate = useNavigate();
    const HandleClick =()=>{
    navigate('./Home');
    }
    const HandleChange=(e)=>{
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
      console.log(state);
      
    }

  return (
    <div className="login-body">
    <div className="container Login_auth_container">
      <div className="row">
        <div className="col-md-6 login-left-column col d-flex align-items-center justify-content-center">
          <div className="m-5">
           
            <h1>Welcome To <br></br>  Signup Page</h1>
          </div>
        </div>
        <div className="col-md-6 Login-Page">
        <div className="w-100 mb-5">
                <form className="login-form">
                    <div className="text-center mb-5 mt-3">
                  <img src={sikkaLogo} />
                        
                    </div>
                    <div className="input-group flex-nowrap mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc",border:"1px solid #5783ff" }}>
                            <FaUserAlt
                            size={20}
                            style={{ color: "#6e1da2" }}
                            />
                        </span>
                        <input
                            type="text"
                            className="form-control w-100"
                            placeholder="Email"
                            name="email"
                            value={state.email}
                            onChange={HandleChange}
                            required
                            />
                    </div>
                    <div className="input-group flex-nowrap mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc",border:"1px solid #5783ff" }}>
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
                            value={state.username}
                            onChange={HandleChange}
                            required
                            />
                    </div>
                    <div className="input-group flex-nowrap position-relative mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc", border:"1px solid #5783ff" }}>
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
                            value={state.password}
                            onChange={HandleChange}
                            required
                            />
                    </div>
                    <div className="input-group flex-nowrap position-relative mb-4">
                        <span className="input-group-text" style={{ background:"#f5f1fc", border:"1px solid #5783ff" }}>
                        <AiFillLock
                        size={20}
                        style={{ color: "#6e1da2" }}
                        />
                        </span>
                        <input
                            type='password'
                            className="form-control w-100"
                            placeholder="Confirm-Password"
                            name="password"
                            value={state.confirm_password}
                            onChange={HandleChange}
                            required
                            />
                    </div>

                    <div className="mb-4">
                        <input
                            type="checkbox"
                            className="me-1 Remember"
                            
                            style={{ border: "1px solid #ced4da",  accentColor: "#0d6efd",  marginTop:"-15px" }}
                            />
                        Remember me
                        <button  className=" btn button__text" onClick={HandleClick}>Signup
                           </button>
                        </div>
                                <div className="mt-5 signup">
			         have an account?
                    <a href="" onClick={()=>navigate('/')} >Login Here</a>
				</div>
                
                
                            
                       
                </form>
            </div>
        </div>


        
      </div>
    </div>

</div>
  );
}

export default Signup;
