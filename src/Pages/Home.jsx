import React,{useEffect,useState} from "react";
import  HomeComponent from "../components/HomeComponent"    ;
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebaseConfig"
import Loader from "../components/common/Loader";
export default function Home({}){
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

    return loader?<Loader/>:<HomeComponent/>;
}