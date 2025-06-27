import React, { useContext, useEffect, useRef, useState } from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
import { toast } from 'react-toastify';

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [chatUser, setChatUser] = useState({
    userData : {
      id: 1,
      avatar: assets.avatar_icon,
      name: "Adnan",
      lastSeen: 60000
    }
  });
  const [chatVisible, setChatVisible] = useState(true);
  const [messages, setMessages] = useState([{
    sId: 1,
    image: assets.avatar_icon,
    text: "Hello World"
  }]);
  const scrollEnd = useRef();
  const userData = null
 

  return chatUser ? (
    <div className={`chat-box ${chatVisible ? "" : "hidden"}`}>
      <div className="chat-user">
        <img src={chatUser ? chatUser?.userData?.avatar : assets.profile_img} alt="" />
        <p>{chatUser ? chatUser?.userData?.name : "Richard Sanford"} {Date.now() - chatUser?.userData?.lastSeen <= 70000 ? <img className='dot' src={assets.green_dot} alt='' /> : null}</p>
        <img  className='arrow' src={assets.arrow_icon} alt="" />
        <img className='help' src={assets.help_icon} alt="" />
      </div>
      <div className="chat-msg">
        <div ref={scrollEnd}></div>
        {
          messages?.map((msg, index) => {
            return (
              <div key={index} className={msg.sId === userData?.id ? "s-msg" : "r-msg"}>
                {msg["image"]
                  ? <img className='msg-img' src={msg["image"]} alt="" />
                  : <p className="msg">{msg["text"]}</p>
                }
                <div>
                  <img src={msg.sId === userData?.id ? userData.avatar : chatUser.userData.avatar} alt="" />
                  <p>26-06-2025</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input  type="file" id='image' accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img  src={assets.send_button} alt="" />
      </div>
    </div>
  ) : <div className={`chat-welcome ${chatVisible ? "" : "hidden"}`}>
    <img src={assets.logo_icon} alt=''/>
    <p>Chat anytime, anywhere</p>
  </div>
}

export default ChatBox
