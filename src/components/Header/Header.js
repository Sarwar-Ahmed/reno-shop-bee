import React, { useState } from 'react';
import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { faBars, faPhoneAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className=''>
            {/*navbar top */}
            <div className='row navTopBg'>
                <Nav className='col-md-6'>
                    <Nav.Item>
                        <Nav.Link href="/" className='text-light'><span><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon></span> <span>+01 123 456 789</span></Nav.Link>
                    </Nav.Item>
                    <span className='pt-2'>|</span>
                    <Nav.Item>
                        <Nav.Link className='text-light'><span><FontAwesomeIcon icon={faEnvelope} style={{color: 'white'}}></FontAwesomeIcon></span> <span>info@company.com</span></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className='col-md-6'>
                    <Nav.Item className='ms-md-auto'>
                        <Nav.Link href="/" className='text-light'><FontAwesomeIcon icon={faFacebook} style={{color: 'white'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faTwitter} style={{color: 'white'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faInstagram} style={{color: 'white'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faLinkedin} style={{color: 'white'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faBehance} style={{color: 'white'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            {/* navbar */}
            <div className=''>
                <Navbar collapseOnSelect expand="lg" bg="white">
                    <Container >
                        <Navbar.Brand href="#home"><span style={{color: '#3CB878'}}>RENOSHOP</span>BEE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/" style={{color: '#3CB878'}}>HOME</Nav.Link>
                                <Nav.Link href="/">WOMEN</Nav.Link>
                                <Nav.Link href="/">MEN</Nav.Link>
                                <Nav.Link href="/">JEWELLERY</Nav.Link>
                                <Nav.Link href="/">ACCESSORIES</Nav.Link>
                            </Nav>
                            <Nav className=''>
                                <Nav.Link href="/"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><span className='CartNum'>3</span></Nav.Link>
                                <Nav.Link href="/"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Nav.Link>
                                <Nav.Link href="/"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;