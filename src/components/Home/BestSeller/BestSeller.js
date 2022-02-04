import {faHeart, faRetweet, faShoppingCart, faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './BestSeller.css';

const BestSeller = () => {
    const fakeData = [
        {
            title: 'Cruise Dual Analog',
            price: 250
        },
        {
            title: 'Crown Summit Backpack',
            price: 250
        },
        {
            title: 'Joust Duffle Bag',
            price: 250
        },
        {
            title: 'Vouaga Yaga Bag',
            price: 250
        }
    ]
    return (
        <div className='row d-flex p-5'>
            <div className="col-md-3 text-start my-auto p-2">
                <h4><strong>BEST SELLER</strong></h4>
                <h6><small style={{color: '#3CB878'}}><em>The best productions from us</em></small></h6>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id quos nam pariatur, delectus asperiores sunt dolorum nobis placeat distinctio.</h6>
            </div>
            <div className="col-md-9 row">
                {
                    fakeData.map(data =>
                        <div className='col-md-3'>
                            <Card className='text-start mt-2 item'>
                                <div className="box">
                                    <Card.Img variant="top" src="" style={{backgroundColor: 'black', width: '100%', height: 300}}/>
                                    <div className='cover d-flex flex-column align-items-end'>
                                        <a href="/"><FontAwesomeIcon icon={faShoppingCart} style={{backgroundColor: '#349764', color: 'white', width: '24px', height:'24px'}} className='p-1'></FontAwesomeIcon></a>
                                        <a href="/"><FontAwesomeIcon icon={faHeart} style={{backgroundColor: '#349764', color: 'white', width: '24px', height:'24px'}} className='p-1'></FontAwesomeIcon></a>
                                        <a href="/"><FontAwesomeIcon icon={faRetweet} style={{backgroundColor: '#349764', color: 'white', width: '24px', height:'24px'}} className='p-1'></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <Card.Body>
                                <Card.Title>{data.title} Analog</Card.Title>
                                <Card.Text style={{color: '#3CB878'}}><strong>${data.price}</strong></Card.Text>
                                <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStarHalfAlt} style={{color: 'gold'}} ></FontAwesomeIcon>
                                </Card.Body>
                            </Card>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default BestSeller;