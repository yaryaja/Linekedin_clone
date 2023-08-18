// import React from 'react';
// import { Modal, Button } from 'antd';
// import "./modal.scss";

// const ModalComponent = ({ isModalOpen, setIsModalOpen, status, setStatus, sendStatus }) => {
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   // console.log(isModalOpen);

//   return (
//     <>
//       <Modal title="create a post" open={isModalOpen} onCancel={handleCancel}
//         footer={[

//           <Button key="submit" type="primary" disabled={status.length > 0 ? false : true}
//             onClick={sendStatus}
//           >
//             Post
//           </Button>,

//         ]}
//       >
//         <input className='modal-input' type="text"
//           onChange={(e) => setStatus(e.target.value)}
//           value={status} placeholder='what do you want to talk about?'
//         />

//       </Modal>
//     </>
//   );
// };

// export default ModalComponent;



import React from 'react';
import { Modal, Button } from 'antd';
import './modal.scss';

const ModalComponent = ({ isModalOpen, setIsModalOpen, status, setStatus, sendStatus }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="create a post"
        open={isModalOpen} // Use 'visible' instead of 'open'
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          type="text"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          placeholder="what do you want to talk about?"
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
