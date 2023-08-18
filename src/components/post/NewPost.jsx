import React, { useState, useMemo } from 'react';
import './index.scss';
import { PostStatus } from '../../api/FirestoreAPI';
import { CgProfile } from 'react-icons/cg';
import { BiPhotoAlbum } from 'react-icons/bi';
import ModalComponent from './modal';
import { getPosts } from '../../api/FirestoreAPI';
import { Moment } from '../../helper/Moment';
import Postcard from './postcard/Postcard';

function NewPost({curruser}) {
  console.log(curruser)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allPost, setallPost] = useState([]);
  let useremail = localStorage.getItem('useremail');

  const sendStatus = async () => {
    const object = {
      post: status,
      timestamp: Moment('LLL'),
      email: useremail,
      // userName:curruser[1],
      user:curruser,
    };

    await PostStatus(object);
    setIsModalOpen(false); // Updated from await setIsModalOpen(false);
    setStatus('');
  };

  useMemo(() => {
    getPosts(setallPost);
  }, []);

  return (
    <div className="post-main">
      <div className="post-update">
        <CgProfile className="profile-img" size={40} onClick={() => goTo('/login')} />
        <button className="start-post-btn" onClick={() =>setIsModalOpen(true)}>
          start a post
        </button>
        
       
      </div>

      {/* Updated visible prop here */}
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        status={status}
        setStatus={setStatus}
        sendStatus={sendStatus}
      />

      {allPost.map((posts) => {
        return <Postcard posts={posts} />;
      })}
    </div>
  );
}

export default NewPost;
