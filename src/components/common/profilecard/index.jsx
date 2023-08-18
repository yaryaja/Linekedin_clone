import { getUser } from '../../../api/FirestoreAPI'
// import{Postcard} from "../"
import { getPosts } from '../../../api/FirestoreAPI';
import Postcard from '../../post/postcard/Postcard';
import { useNavigate,useLocation } from 'react-router-dom';
import React, { useState, useMemo } from 'react'
import { getSingleUser,getSinglestatus } from '../../../api/FirestoreAPI';
import "./index.scss"
function Profilecard({ curruser, onEdit }) {
  let location=useLocation();
  // console.log(curruser);
  const [allPost, setallPost] = useState([]);
  const [currentProfile,setcurrentProfile]=useState([]);
  let posts=allPost;
  console.log(posts)
  useMemo(() => {
    if(location?.state?.id){
      
      const newposts=getSinglestatus(setallPost,location?.state?.email);
      // console.log(newposts);
      // console.log(allPost)
    }
    if(location?.state?.email){
      getSingleUser(setcurrentProfile,location?.state?.email);
    }
    
  }, []);
  // console.log(allPost.length);
  // console.log(localStorage.getItem("useremail"))
  // console.log(curruser)
  // console.log
  

 
  return (
    <div className="Post-main">
      <div className="Card-post">
        {currentProfile.length?<h1 className='userName'>{currentProfile[0]?.Name}</h1>:<h1 className='userName'>{curruser?.name}</h1>}
        <h2 className='userHeadline'>{currentProfile[0]?.Headline}</h2>
        {currentProfile.length?<h1 className='userHeadline'>{currentProfile[0]?.Name}</h1>:<h1 className='userHeadline'>{curruser?.Headline}</h1>}

        {currentProfile.length?<h1 className='userCollege'>{currentProfile[0]?.College}</h1>:<h1 className='userHeadline'>{curruser?.College}</h1>}
       
        {currentProfile.length?<h1 className='userLocation'>{currentProfile[0]?.Location}</h1>:<h1 className='userLocation'>{curruser?.Location}</h1>}
       
        <button className='edit-btn' onClick={onEdit}>edit</button>


      </div >
      <div className='Post-card'>

      {
        allPost.map((posts)=>{
          console.log(posts);
          return<Postcard posts={posts}/>
        })
      }

      </div>

    </div>


  )
}
export default Profilecard