import React from 'react'
// import "../assets/logo.png";
import "../Sass/LoginComponent.scss";
import { LoginAPI, setAPI,Login_Google_API } from '../api/AuthAPI';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import Home from '../Pages/Home'
function LoginComponent() {
  // const navigate = useNavigate();

  const [credential, setCredential] = useState({});
  const navigate = useNavigate();
  // const login = () => {
  //   try{
  //   LoginAPI(credential.email,credential.password);
  //   }catch(err){
  //     console.error(err)
  //   }
  const login = async() => {
    try {
      let res=await LoginAPI(credential.email, credential.password);
      let Email=res.user.email;
      localStorage.setItem("useremail",Email);
      toast.success("you are signed in");
      localStorage.setItem("useremail",res.user.email);
      // console.log(res.user);
      navigate("/home");

    } catch (err) {
     toast.error("login faliled");
    }



  }
  const login_Google = async() => {
    try {
      let res=await Login_Google_API(credential.email, credential.password);
      let Email=res.user.email;
      localStorage.setItem("useremail",Email);
      toast.success("you are signed in");
      localStorage.setItem("useremail",res.user.email);
      navigate("/home");
    } catch (err) {
     toast.error("login faliled");
    }



  }

  return (
    <div className='login-wrapper'>
      <img className='linkedin-logo' src="src/assets/logo.png" alt="human image" />


      <div className='login-inner-wrapper'>
        <h1 className='heading'>Sign in</h1>
        <p className='sub-heading'>Stay updated on your professional world</p>


        <div className='auth-inputs'>


          <input className='auth-common-inputs'
            onChange={(event) =>
              setCredential({ ...credential, email: event.target.value })
            }
            type="email"
            placeholder='enter your email...'

          />

          <input className='auth-common-inputs'
            onChange={(event) =>
              setCredential({
                ...credential, password: event.target.value
              })
            }

            type="password"
            placeholder='enter your password...'

          />

          <a className='forgot_password' href="">Forgot Password</a>

          <button onClick={login} className="login-btn">Log in to Linkedin</button>
          <div>

            <hr className="hr-text" data-content="______or______" />

            <div onClick={login_Google}
             className="google-btn">
              <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              </div>
              <p className="btn-text"><b>Sign in with google</b></p>
            </div>
          </div>
        </div>


      <div className="join-now">New to LinkedIn? <span className="join-now-inside" onClick={()=>{navigate('/register');

      }}>Join Now</span></div>
    </div>
      </div>


  );
}

export default LoginComponent