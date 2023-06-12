import React from 'react'
import MenuItems from './MenuItems'
import { menuItems } from '../Components/Side-menuItems'
const Sidebar = () => {
  return (
    <>
        {
            menuItems.map((menu,index)=>{
                return <MenuItems items = {menu} key = {index} />
            })
        }
    {/* // now in this I have to iterate in map and then, in which I will pass the items in the menuitems component, which will render the menus*/}
    </>
  )
}

export default Sidebar

// import React, { useState } from 'react';

// function Sidebar() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   const expandSidebar = () => {
//     setSidebarOpen(true);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };

//   const toggleSubmenu = (index) => {
//     if (activeSubmenuItem === index) {
//       setActiveSubmenuItem(null);
//     } else {
//       setActiveSubmenuItem(index);
//     }
//   };

//   const handleMouseEnter = () => {
//     if (isSidebarOpen) {
//       setSidebarOpen(false);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (isSidebarOpen) {
//       setSidebarOpen(true);
//     }
//   };

//   const submenuItems = [
//     { title: 'Submenu Item 1' },
//     { title: 'Submenu Item 2' },
//     { title: 'Submenu Item 3' },
//   ];

//   return (
//     <div>
//       <button id="sidebarOpen" onClick={toggleSidebar}>
//         Open Sidebar
//       </button>

//       <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
//         <button className="collapse_sidebar" onClick={closeSidebar}>
//           Collapse Sidebar
//         </button>
//         <button className="expand_sidebar" onClick={expandSidebar}>
//           Expand Sidebar
//         </button>

//         <ul
//           className={`submenu ${
//             isSidebarOpen ? (activeSubmenuItem !== null ? 'show_submenu' : '') : 'hoverable'
//           }`}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {submenuItems.map((item, index) => (
//             <li
//               key={index}
//               className={`submenu_item ${activeSubmenuItem === index ? 'show_submenu' : ''}`}
//               onClick={() => toggleSubmenu(index)}
//             >
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button id="darkLight" onClick={toggleDarkMode}>
//         {isDarkMode ? <i className="bx bx-moon"></i> : <i className="bx bx-sun"></i>}
//       </button>

//       <div className={`body ${isDarkMode ? 'dark' : ''}`}>
//         {/* Content */}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
