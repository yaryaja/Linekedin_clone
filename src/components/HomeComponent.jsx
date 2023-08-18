import React, { useMemo, useState } from 'react'
import Topbar from './navbar/Topbar';
import NewPost from './post/NewPost';
import { getUser } from '../api/FirestoreAPI';
// import { useMemo } from 'react';
function HomeComponent() {
  const [curruser, setCurruser] = useState({});
  useMemo(() => {
    getUser(setCurruser);
  }, [])
  // console.log(curruser);
  return (
    <div>
      <Topbar />
      <NewPost curruser={curruser} />
    </div>
  )
}

export default HomeComponent;