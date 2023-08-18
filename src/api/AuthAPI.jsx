import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signOut } from "firebase/auth";
import {auth,google_provider}from "../firebaseConfig";


export const LoginAPI=(email,password)=>{
    try{
      
    let res=signInWithEmailAndPassword(auth,email,password);
    return res;

    
    }
    catch(err){
        return err;
    }

};


export const Login_Google_API=()=>{
    try{
      
    let res=signInWithPopup(auth,google_provider);
    return res;
    }
    catch(err){
        return err;
    }

};
export const logout=()=>{
    try{
        signOut(auth);
    }
    catch(err){
        return err;
    }

};

export const setAPI=(email,password)=>{
    try{
        let res=createUserWithEmailAndPassword(auth,email,password);
        return res;
  
    }
    catch(err){
        return err;
    }

};