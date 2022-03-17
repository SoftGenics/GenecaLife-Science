import React, {useState} from 'react'
import { Navbar, Nav, Container  } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom';
function NavbarMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" fixed='top' className='top-navbar shadow'>
            <Container fluid>
            <Navbar.Brand  ><Link to='/'><img src='images/logo.png' alt='geneca-logo' /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'green',transform:'Scale(1.3)'}}/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link  as={Link} to="/"><i className="fas fa-home"/>&nbsp;HOME</Nav.Link>
                <Nav.Link href="#product" onClick={closeMobileMenu}><i class="fas fa-shapes"></i>&nbsp;PRODUCTS</Nav.Link>
                <Nav.Link href="#company-profile" onClick={closeMobileMenu}><i class="fas fa-building"></i>&nbsp;COMPANY PROFILE</Nav.Link>
                <Nav.Link href="#about" onClick={closeMobileMenu}><i class="fas fa-info-circle"></i>&nbsp;ABOUT US</Nav.Link>
                <Nav.Link href="#contact-us" onClick={closeMobileMenu}><i class="far fa-address-card"></i>&nbsp;CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    </div>
  )
}

export default NavbarMenu