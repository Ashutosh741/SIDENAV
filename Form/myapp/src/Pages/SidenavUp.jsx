import React from 'react'
import SidenavDown from './SidenavDown'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'
const SidenavUp = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo_item">
        <i className="fa-solid fa-house" id="sidebarOpen"></i>
        Frantic
        </div>

        <div className="search_bar">
        <input type="text" placeholder="Search" />
        </div>

        <div className="navbar_content">
        <i className="fa-solid fa-border-none"></i>
        <i className="fa-solid fa-moon" id="darkLight"></i>
        <i className="fa-solid fa-bell"></i>
        
        {/* <img src="../../images/profile.jpg" alt="" className="profile" /> */}
        </div>
        </nav>
        <SidenavDown/>
    </div>
  )
}

export default SidenavUp
// 