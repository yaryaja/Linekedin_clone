import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineGroup } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';

import { AiOutlineSearch } from 'react-icons/ai';
import "./Topbar.scss"
import { useNavigate } from 'react-router-dom';
// import Profilepop from '../common/profilepopup/Profilepop';
import ProfilePicture from '../common/profilepopup/Profilepop';

function Topbar() {
  let navigate=useNavigate();
  const goTo=(param)=>{
    navigate(param);
  }
  return (
    <div className='Topbar'>
      <img className='Toplogo' src="src/assets/logo.png" alt="" />

      {/* <div className='input-box'>
        <div className='icon'>

          <AiOutlineSearch size={30} />
        </div>
        <input className='search-input' />


      </div> */}
      <div className="search-bar">
      <AiOutlineSearch size={30} />
        <input type="text" id="search-input" placeholder="Search" />
      </div>

      <div className='icons'>

        <div className='icon'>

          <AiFillHome size={30} onClick={()=>goTo('/home')}
           />
        </div>
        <div className='icon'>


          <MdOutlineGroup size={30} />
        </div>
        <div className='icon'>


          <MdWork size={30} />
        </div>
        <div className='icon'>

          <BiMessageRoundedDetail size={35} />
        </div>
        <div className='icon'>


          <MdNotifications size={30} />
        </div>


      <ProfilePicture/>
      </div>
     
    </div>
  )
}

export default Topbar



