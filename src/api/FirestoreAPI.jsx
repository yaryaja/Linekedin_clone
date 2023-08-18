import { getFirestore, collection, addDoc,onSnapshot,doc,updateDoc, query,where } from "firebase/firestore";
import {app} from "../firebaseConfig"
import { toast } from 'react-toastify'
// import { getItem } from "localforage";

const db=getFirestore(app);
const postRef = collection(db, "Posts");
const userRef = collection(db, "Users");

export const PostStatus=(object)=>{

   
    addDoc(postRef,object)
    .then(() => {
        toast.success("Posted successfully");
    })
    .catch(() => {
        toast.error("some error happened");
    })
};


export const  getPosts=(setallPost)=> {
    onSnapshot(postRef,(res)=>{
        setallPost(
            res.docs.map((docs)=>{
                return {...docs.data(),user_id:docs.id};
            })
        )
    });
};

export const postUserdata=(object)=>{

   
    addDoc(userRef,object)
    .then(() => {
        toast.success("user added successfully");
    })
    .catch(() => {
        toast.error("some error happened");
    })
};

export const  getUser=(setCurruser)=> {
    const curremail=localStorage.getItem("useremail");

    onSnapshot(userRef,(res)=>{
        // console.log(res);
        setCurruser(
            res.docs.map((docs)=>{
                return {...docs.data(),user_id:docs.id};
            }).filter((doc)=>{
                return doc.email===curremail;
            })[0]

            )
    });
};

export const EditProfile=(id,payload)=>{
    let userToEdit=doc(userRef,id);
    updateDoc(userToEdit,payload)
    .then(() => {
        toast.success("data updated successfully");
        console.log("updated");
    })
    .catch((err) => {
        toast.error("some error happened");
        console.log(err);
    })




}

export const getSinglestatus=(setallPost,id)=>{
    // conslo
    // console
    const singlePostQuery=query(postRef,where("email","==",id));
    onSnapshot(singlePostQuery,(res)=>{
        setallPost(
            res.docs.map((doc)=>{
                return{...doc.data(),id:doc.id};
            })
        )
        // console.log(result);
        // return result;
    })
}

export const getSingleUser=(setCurrUser,email)=>{
    const singleUser=query(userRef,where("email","==",email));
    onSnapshot(singleUser,(res)=>{
        setCurrUser(
            res.docs.map((doc)=>{
                return{...doc.data(),id:doc.id};
            })
        )
    })
}