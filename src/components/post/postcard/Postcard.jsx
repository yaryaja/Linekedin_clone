import React from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';
function Postcard({posts}) {
 
  const navigate=useNavigate();
  // console.log(posts.email);
  const userid=posts?.user.user_id;
  console.log(userid)
  return (
   <div className='post-card'>
     <p onClick={()=>navigate('/profile',{
      state:{id:userid,email:posts?.email}
     })}
     className='name'>{posts.user.name}</p>
    <p className='post'>{posts.post}</p>
    {/* <p className='post'>{posts.email}</p> */}
    <p className='timestamp'>{posts.timestamp}</p>
   </div>
  )
}

export default Postcard;

