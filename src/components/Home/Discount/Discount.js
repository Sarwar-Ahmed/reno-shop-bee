import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Discount.css'

const Discount = () => {
    return (
        <div className='row'>
            <div className="col-md-6 p-5 text-white" style={{backgroundColor: '#2A2F41'}}>
                <div className='p-2'>
                    <h2><strong>Get Out Special Discount</strong></h2>
                    <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos fugit.<br /> register your email for news and special offers</small></p>
                </div>
                <div className=''>
                    <Form className='d-flex justify-content-center'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail address ..." />
                        </Form.Group>
                        <Button variant="success" type="submit"  style={{marginLeft: '5px', innerWidth:'100%'}}>GET COUPON NOW</Button>
                    </Form>
                </div>
            </div>
            <div className="col-md-6 row" style={{backgroundColor: '#F5F6F9'}}>
                <div className="col-md-3 my-auto p-1">
                    <a href="/"><img src="https://i.ibb.co/qxxDJJC/brand-logo-4a.png" alt="" className='w-100 p-2'/></a>
                </div>
                <div className="col-md-3 my-auto p-1">
                    <a href="/"><img src="https://i.ibb.co/Vt4k64C/brand-logo-1a.png" alt="" className='w-100 p-2'/></a>
                </div>
                <div className="col-md-3 my-auto p-1">
                    <a href="/"><img src="https://i.ibb.co/XXz2hj8/brand-logo-2a.png" alt="" className='w-100 p-2'/></a>
                </div>
                <div className="col-md-3 my-auto p-1">
                    <a href="/"><img src="https://i.ibb.co/tDL9sqJ/brand-logo-3a.png" alt="" className='w-100 p-2'/></a>
                </div>
            </div>
        </div>
    );
};

export default Discount;