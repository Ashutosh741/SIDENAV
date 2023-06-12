import React from 'react'
import MenuItems from './MenuItems'

// const Dropdown = ({submenus,dropdown}) => {
//   return (
//     <ul>
//         {
//             submenus.map((submenu,index)=>(
//                 // console.log(submenu);
//                 <MenuItems items= {submenu} key = {index}/>
//             ))
//         }
//     </ul>
//   )
// }


const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
       <MenuItems items={submenu} key={index} />
      ))}
     </ul>
    );
   };

export default Dropdown
