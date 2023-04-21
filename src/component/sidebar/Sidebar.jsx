import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img
                    src="https://images.pexels.com/photos/4240500/pexels-photo-4240500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>

            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOW US</div>
                <ul className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar