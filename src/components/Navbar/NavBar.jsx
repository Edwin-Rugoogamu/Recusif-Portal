import React from 'react';
import style from "./NavBar.module.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../Authentication/auth';
import { useNavigate } from 'react-router-dom';
import { FaBell } from "react-icons/fa6";


function NavBar(props) {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout=()=>{
    auth.logout()
    navigate("/login")
  }
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    const closeOffcanvas = () => {
      setShowOffcanvas(false);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (isLargeScreen) {
        closeOffcanvas();
      }
    }, [isLargeScreen]);
  
    // scroll to section
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

   
    };
    return (
        <>
            {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3"
          id={style.Navbar}
        >
          <Container fluid>
            <Navbar.Brand>
              {" "}
              <Link to="#" id={style.Link} onClick={() => scrollToSection('section1')}>
                {" "}
                <label className={style.e}>R</label>ecursif .
              </Link>
            </Navbar.Brand>
            <FaShoppingCart  className={style.cart}/>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id={style.NavToggle}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            
            <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-${expand}`}
              id="offcanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={closeOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Recursif
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav>
                <Form className="d-flex"   >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    id={style.search}
                  />
               
                </Form>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 
                
                    {/* <Nav id={style.Link2} onClick={() => scrollToSection('section2')}><MdAccountCircle className={style.accountIcon} /> Account</Nav> */}
                    <Nav id={style.accountNav} >
                    <Dropdown>
                      <Dropdown.Toggle id={style.account}>
                      <MdAccountCircle className={style.accountIcon} />

                      {!auth.username &&(
                      "Account")}{auth.username &&(auth.username)}
                      </Dropdown.Toggle>

                      <Dropdown.Menu id={style.Dropdown_menu}>
                        {!auth.username &&(  <Dropdown.Item
                          href="./login"
                          id={style.Dropdown_Item}
                          onClick={closeOffcanvas}
                        >
                            <label > Sign in  </label>
                        
                        </Dropdown.Item>)}
           
                        
                       
                      
                       
                        <Dropdown.Item
                          // href="#/action-3"
                          id={style.Dropdown_Item}
                          onClick={closeOffcanvas}
                        >
                            <label className={style.logout} onClick={handleLogout}> LOGOUT</label>
                         
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
                  
                
                  {/* yaa */}
                
                  <Link to="" id={style.Link} onClick={closeOffcanvas}>
                    <Nav id={style.Link2} onClick={() => scrollToSection('section4')}><FaBell   className={style.cart2}/> not</Nav>
                    
                  </Link>
  
                </Nav>
              </Offcanvas.Body>
             
            </Navbar.Offcanvas>
          
          </Container>
        </Navbar>
      ))} 
        </>
    );
}

export default NavBar;