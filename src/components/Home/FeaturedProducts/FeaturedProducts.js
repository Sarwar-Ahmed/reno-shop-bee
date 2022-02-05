import { faHeart, faRetweet, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './FeaturedProducts.css';
import fakeData from './fakeData';

const FeaturedProducts = () => {
    return (
        <div>
            <div className='text-center p-5'>
                <h4><strong>FEATURED PRODUCTS</strong></h4>
                <small style={{color: '#3CB878'}}><em><strong>Newest trends from top brands</strong></em></small>
            </div>
            <div className='row p-5'>
            {
                fakeData.map(data =>
                    <div className="col-md-3">
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

export default FeaturedProducts;