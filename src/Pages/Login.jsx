import React from "react";
import LoginComponent from "../components/LoginComponent";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/common/Loader";

export default function Login() {
    const [loading,setLoading]=useState(true);

    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (res) {
               
                navigate("/home");
            }
            else{
                // console.log(res.accesToken);
                setLoading(false);
            }
        });

    }, []);
    return loading?<Loader/>:<LoginComponent />;
}