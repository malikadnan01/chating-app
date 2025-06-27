import React, { useContext, useEffect, useState } from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {

    const [user, setUser] = useState({
        name: "Adnan",
        avatar: assets.avatar_icon,
    });
    const [showSearch, setShowSearch] = useState(false) 
    const [chatVisible, setChatVisible] = useState(false) 
    const [chatData, setChatData] = useState([
        {
            messageId:1,
            messageSeen: true,
            userData: {
                avatar: assets.avatar_icon,
                name: "Adnan"
            },
            lastMessage: "Hello World"
        }
    ]) 


    return (
        <div className={`ls ${chatVisible ? "hidden" : ""}`}>
            <div className='ls-top'>
                <div className='ls-nav'>
                    <img className='logo' src={assets.logo} alt="" />
                    <div className='menu'>
                        <img src={assets.menu_icon} alt="" />
                        <div className='sub-menu'>
                            <p >Edit Profile</p>
                            <hr />
                            <p >Logout</p>
                        </div>
                    </div>

                </div>
                <div className="ls-search">
                    <img src={assets.search_icon} alt="" />
                    <input  type="text" placeholder='Search here..' />
                </div>
            </div>
            <div className="ls-list">
                {showSearch && user
                    ? <div className='friends add-user'>
                        <img src={user.avatar} alt="" />
                        <p>{user.name}</p>
                    </div>
                    : chatData?.map((item, index) => (
                        <div key={index} className={`friends ${item.messageSeen || item.messageId === messagesId ? "" : "border"}`}>
                            <img src={item.userData.avatar} alt="" />
                            <div>
                                <p>{item.userData.name}</p>
                                <span>{item.lastMessage.slice(0, 30)}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default LeftSidebar
