import React,{useEffect,useState} from "react";
import ProfileComponent from "../components/ProfileComponent"
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebaseConfig"
import Loader from "../components/common/Loader";
// import {}from "../components/ProfileComponent"

export default function Profile() {
  const [loader,setLoader]=useState(true);
  let navigate=useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth,(res)=>{
              if(!res){
                  console.log(res);
                  navigate("/");
              }
              else{
                  setLoader(false)
                  
              }
      })

  },[]);
  return loader?<Loader/>:<ProfileComponent/>
}

