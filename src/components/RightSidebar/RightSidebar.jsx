import React, { useContext, useEffect,useState } from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
const RightSidebar = () => {

  const [msgImages,setMsgImages] = useState([
    "/background.png"
  ]);
  const [chatUser,setChatUser] = useState({
    userData: {
      avatar: assets.avatar_icon,
      lastSeen: 60000,
      name: "Adnan",
      bio: "Professional Developer"
    }
  });

  
  
  
  return chatUser  ? (
    <div className='rs'>
      <div className='rs-profile'>
        <img src={chatUser.userData?.avatar} alt="avatar" />
        <h3>{Date.now() - chatUser.userData?.lastSeen <= 70000 ?<img className='dot' src={assets.green_dot} alt=''/>:null}{chatUser.userData?.name}</h3>
        <p>{chatUser.userData?.bio}</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          {msgImages.map((url,index)=>(<img onClick={()=>window.open(url)} key={index} src={url} alt="" />))}
        </div>
      </div>
      <button >Logout</button>
    </div>
  ) : <div className='rs'>
    <button>Logout</button>
  </div>
}

export default RightSidebar
