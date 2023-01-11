import React from 'react'
import '../Styles/Header.css';
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div className='Header'>
     <div className='container-fluid Header-head'>
      <h5>Petients Portal</h5>
      <span className='Dropdown'>
        <CgProfile size={40} />
      </span>
     </div>
    </div>
  )
}

export default Header