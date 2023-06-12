import React from 'react'
import Dropdown from './Dropdown'
import {useState} from 'react'
import {Link} from 'react-router-dom'
const MenuItems = ({items}) => {
    const [dropdown,setDropdown] = useState(false);
  return (
    <>
        {items.submenu ? (
            <>
                 <button
                // ...
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
                >
                {items.title}{" "}
                </button>
                <Dropdown  dropdown = {dropdown} submenus={items.submenu}/>
                {/* {console.log(items)} */}
            </>
        ) : (
            <Link to = {items.url}>{items.title}</Link>
        )}
    </>
  )
}

export default MenuItems
