import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faGlobeAmericas, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* Footer top */}
            <div className='row' style={{borderBottom: '1px solid gray'}}>
                <div className="col-md-6 my-auto" style={{borderRight: '1px solid gray'}}>
                    <h6><small>We're confident we've provided all the best for you. Stay connect with us</small></h6>
                </div>
                <Nav className='col-md-6 d-flex justify-content-center' >
                    <Nav.Item className=''>
                        <Nav.Link href="/" className='text-light'><FontAwesomeIcon icon={faFacebook} style={{color: 'black'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faTwitter} style={{color: 'black'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faInstagram} style={{color: 'black'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faLinkedin} style={{color: 'black'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><FontAwesomeIcon icon={faBehance} style={{color: 'black'}}></FontAwesomeIcon></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            {/* Footer */}
            <div className='row d-flex justify-content-center text-start p-5'>
                <div className="col-md-8 row">
                    <div className="col-md-4">
                        <h6 className='p-3'><strong>INFORMATION</strong></h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link style={{color: 'black'}}>Delivery Information</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Discount</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Sitemap</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Privacy Policy</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>My Account</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-md-4">
                        <h6 className='p-3'><strong>MY ACCOUNT</strong></h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link style={{color: 'black'}}>Sign In</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>View Cart</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>My Wishlist</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Check Out</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Track My Order</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-md-4">
                        <h6 className='p-3'><strong>HELP</strong></h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link style={{color: 'black'}}>F.A.Q</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Shipping</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Contact Us</Nav.Link>
                            <Nav.Link style={{color: 'black'}}>Privacy Policy</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className="col-md-4">
                        <h6 className='p-3'><strong>CONTACT INFO</strong></h6>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link style={{color: 'black'}}><FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon> Your Address, Country.</Nav.Link>
                            <Nav.Link style={{color: 'black'}}><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +1 234 5678 9999</Nav.Link>
                            <Nav.Link style={{color: 'black'}}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span style={{color: '#3CB878'}}> mail@domain.com</span></Nav.Link>
                        </Nav>
                    </div>
            </div>
            {/* Footer Bottom */}
            <div className='row bg-black '>
                <div className="col-md-6 mt-2">
                    <h6><small><strong>Copyright 2017 RenoshopBee all right reserved - Design by BeeStudios</strong></small></h6>
                </div>
                <Nav className='col-md-6 d-flex justify-content-center' >
                    <Nav.Item className=''>
                        <Nav.Link href="/" className='text-light'><img fluid className='w-100' style={{height: '20px', width: '20px'}} src="https://i.ibb.co/GWgdWfr/visa5.png" alt="visa" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><img fluid className='w-100' style={{height: '20px', width: '20px'}} src="https://i.ibb.co/3f6fDR4/paypal11.png" alt="paypal" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><img fluid className='w-100' style={{height: '20px', width: '20px'}} src="https://i.ibb.co/7V7MK73/amazon3.png" alt="amazon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><img fluid className='w-100' style={{height: '20px', width: '20px'}} src="https://i.ibb.co/S6jhmYs/maestro1.png" alt="maestro" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-light'><img fluid className='w-100' style={{height: '20px', width: '20px'}} src="https://i.ibb.co/3mWBcfK/card34.png" alt="amex" /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default Footer;