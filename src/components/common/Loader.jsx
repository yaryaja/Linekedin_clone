import React from 'react'
import { Space,Spin } from 'antd';
// import "./Loader.scss"
function Loader() {
  return (
    <div className="loader">
      <p>Loading.......please wait</p>
        <Space size="large">
          
        <Spin size='large'/>
        </Space>
    </div>
  )
}

export default Loader



