import React, { useMemo, useState } from 'react'
import Topbar from './navbar/Topbar';
import Profilecard from"./common/profilecard/index"
import {} from "../components/common/profilecard/index"
import { getUser } from '../api/FirestoreAPI';
import ProfileEdit from "./common/profileEdit/index"
// import { useMemo } from 'react';

function ProfileComponent() {
  const [curruser, setCurruser] = useState({});
  const [isEdit,setIsEdit]=useState(false);
  useMemo(() => {
    getUser(setCurruser);
  }, [])
  // console.log(curruser);
  const onEdit=()=>{
    setIsEdit(!isEdit);
  }
  return (
    <div>
      <Topbar />
      {isEdit?<ProfileEdit curruser={curruser} onEdit={onEdit}/>:<Profilecard curruser={curruser} onEdit={onEdit} />}
    </div>
  )
}

export default ProfileComponent;