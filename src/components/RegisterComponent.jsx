import React ,{useId} from 'react'
import "../Sass/LoginComponent.scss";
import {  setAPI,Login_Google_API } from '../api/AuthAPI';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { postUserdata } from '../api/FirestoreAPI';
function RegisterComponent() {
    // const navigate = useNavigate();
    const id=useId();
    console.log(id);
  
    const [credential, setCredential] = useState({});
    const navigate = useNavigate();
    const register = async() => {
      try {
        let res=await setAPI(credential.email, credential.password);
        postUserdata({name:credential.name,email:credential.email,password:credential.password})
        toast.success("succesfully registerd");
        localStorage.setItem("useremail",res.user.email);
        navigate('/home');
        
      } catch (err) {
       toast.error("some error happened");
       console.error(err);
      }
  
  
  
    }
    const login_Google = async() => {
      try {
        // console.log(credential.email);
        let res=await Login_Google_API(credential.email, credential.password);
        let Name=res.user.displayName;
        let Email=res.user.email;
        localStorage.setItem("useremail",Email);
        // console.log(res.user.displayName);
        // console.log(res);
        await  postUserdata({name:Name,email:Email,user_id:{id}})
        toast.success("you are signed in");
        navigate("/home");
      } catch (err) {
        alert(err);
       toast.error("login faliled");
      }
  
  
  
    }
  
    return (
      <div className='login-wrapper'>
        <img className='linkedin-logo' src="src/assets/logo.png" alt="human image" />
  
  
        <div className='login-inner-wrapper'>
          <h1 className='heading'>Join Linkedin</h1>
         
  
  
          <div className='auth-inputs'>
  
          <input className='auth-common-inputs'
              onChange={(event) =>
                setCredential({ ...credential, name: event.target.value })
              }
              type="text"
              placeholder='Enter your name'
  
            />
            <input className='auth-common-inputs'
              onChange={(event) =>
                setCredential({ ...credential, email: event.target.value })
              }
              type="email"
              placeholder='Email'
  
            />
  
            <input className='auth-common-inputs'
              onChange={(event) =>
                setCredential({
                  ...credential, password: event.target.value
                })
              }
  
              type="password"
              placeholder='Password(8+ characters)'
  
            />
  
              <p className='agree'> By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
            <button onClick={register} className="login-btn">Agree and Join</button>
            <div>
  
              <hr class="hr-text" data-content="______or______" />
  
              <div onClick={login_Google}
               class="google-btn">
                <div class="google-icon-wrapper">
                  <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
              </div>
            </div>
          </div>
  
  
        <div className="join-now">Already in Linkedin ? <span className="join-now-inside" onClick={()=>{navigate('/');
  
        }}>Sign In</span></div>
      </div>
        </div>
  
  
    );
  }
  
  export default RegisterComponent