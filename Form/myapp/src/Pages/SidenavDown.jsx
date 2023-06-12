import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidenavDown = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isDarkMode, setDarkMode] = useState(false);
    const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
  
    const expandSidebar = () => {
      setSidebarOpen(true);
    };
  
    const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
    };
  
    const toggleSubmenu = (index) => {
      if (activeSubmenuItem === index) {
        setActiveSubmenuItem(null);
      } else {
        setActiveSubmenuItem(index);
      }
    };
  
    const handleMouseEnter = () => {
      if (isSidebarOpen) {
        setSidebarOpen(false);
      }
    };
  
    const handleMouseLeave = () => {
      if (isSidebarOpen) {
        setSidebarOpen(true);
      }
    };

  const menuItems = [
    { title: 'Home', link: '/',icon : 'house',heading : 'menu_dahsboard' ,submenuItems: ['Home 1', 'Home 2', 'Home 3', 'Home 4'] },
    { title: 'Overview', link: '/', icon : "freebsd",submenuItems: ['Overview 1', 'Overview 2', 'Overview 3', 'Overview 4'] },
    { title: 'Staff', link: '/staff',icon : "road-lock" },
    { title: 'Register', link: '/register',icon : "tiktok", },
    { title: 'Filter', link: '/filter' ,icon : "tiktok",},
    { title: 'Upload new', link: '/uploadNew' ,icon : "image",},
    { title: 'Notice board', link: '/NoticeBoard',icon : "linkedin", },
    { title: 'Award', link: '/award',icon : "star",heading : 'menu_editor' },
    { title: 'Setting', link: '/setting' ,icon : "heart",},
    { title: 'Features', link: '/features' ,icon : "bomb",},
  ];

  return (
    <div>
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            {menuItems.map((item, index) => (
               <li key={index} className="item">
            <div className={`menu_title ${item.heading}`}></div>
                <NavLink to={item.link} className="nav_link submenu_item">
                  <span className="navlink_icon">
                    <i className={`fa-solid fa-${item.icon}`}></i>
                  </span>
                  <span className="navlink">{item.title}</span>
                  {item.submenuItems && (
                    <i className="fa-solid fa-angle-right arrow-left"></i>
                  )}
                </NavLink>
                {item.submenuItems && (
                //   <ul className="menu_items submenu">
                <ul
                className={`submenu ${
                  isSidebarOpen ? (activeSubmenuItem !== null ? 'show_submenu' : '') : 'hoverable'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                    {item.submenuItems.map((submenuItem, subIndex) => (
                    //   <li key={subIndex} className="menu-items">
                    <li
                    key={subIndex}
                    className={`submenu_item ${activeSubmenuItem === index ? 'show_submenu' : ''}`}
                    onClick={() => toggleSubmenu(index)}
                  >
                        <NavLink to={`/home${subIndex + 1}`} className="nav_link sublink">
                          {submenuItem}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
{/* 
          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            {menuItems.slice(2).map((item, index) => (
              <li key={index} className="item">
                <NavLink to={item.link} className="nav_link">
                  <span className="navlink_icon">
                    <i className="fa-solid fa-wand-sparkles"></i>
                  </span>
                  <span className="navlink">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul> */}

          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span>Expand</span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <div className="bottom collapse_sidebar">
              <span>Collapse</span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidenavDown;
