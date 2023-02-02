import React from 'react'
import '../Styles/Header.css';
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  const navigate = useNavigate();
 
  const HandleClick =()=>{
    navigate('/')
  }

  return (
    <div className='Header'>
  <Navbar>
  
        <Navbar.Brand href="#home" className='container-fluid Header' > <h2>Petient Portal</h2></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">    <span className='Dropdown'>
        
        <Dropdown>
      <Dropdown.Toggle className='Dropdown-Toggle'  id="dropdown-basic">
      <CgProfile size={35}  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">change Password</Dropdown.Item>
        <Dropdown.Item>
          {
            <div className='Logout-btn'>
              <a className='float-left' onClick={HandleClick} >Logout
               
              </a>

              
            </div>
          }
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </span></Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>


     {/* <div className='container-fluid Header-head'>
      <h2>Petient Portal</h2>
      <span className='Dropdown'>
      
      </span>
      <span className='Dropdown'>
        
        <Dropdown>
      <Dropdown.Toggle className='Dropdown-Toggle'  id="dropdown-basic">
      <CgProfile size={35} style={{marginTop:"-6px"}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">change Password</Dropdown.Item>
        <Dropdown.Item>
          {
            <div className='Logout-btn'>
              <a className='float-left' onClick={HandleClick} >Logout
               
              </a>

              
            </div>
          }
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </span>
     </div> */}
    </div>
  )
}

export default Header