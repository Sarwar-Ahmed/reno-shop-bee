import { faStar, faStarHalf, faStarHalfAlt, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './BestSeller.css';

const BestSeller = () => {
    return (
        <div className='row d-flex p-5'>
            <div className="col-md-3 text-start my-auto p-2">
                <h2><strong>BEST SELLER</strong></h2>
                <h6><small style={{color: '#3CB878'}}><em>The best productions from us</em></small></h6>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id quos nam pariatur, delectus asperiores sunt dolorum nobis placeat distinctio.</h6>
            </div>
            <div className="col-md-9 p-2">
                <CardGroup>
                    <Card className='text-start'>
                        <Card.Img variant="top" src="" style={{backgroundColor: 'black', width: '100%', height: 300}}/>
                        <Card.Body>
                        <Card.Title>Cruise Dual Analog</Card.Title>
                        <Card.Text style={{color: '#3CB878'}}><strong>$250</strong></Card.Text>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: 'gold'}} ></FontAwesomeIcon>
                        </Card.Body>
                    </Card>
                    <Card className='text-start'>
                        <Card.Img variant="top" src="" style={{backgroundColor: 'black', width: '100%', height: 300}}/>
                        <Card.Body>
                        <Card.Title>Cruise Dual Analog</Card.Title>
                        <Card.Text style={{color: '#3CB878'}}><strong>$250</strong></Card.Text>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: 'gold'}} ></FontAwesomeIcon>
                        </Card.Body>
                    </Card>
                    <Card className='text-start'>
                        <Card.Img variant="top" src="" style={{backgroundColor: 'black', width: '100%', height: 300}}/>
                        <Card.Body>
                        <Card.Title>Cruise Dual Analog</Card.Title>
                        <Card.Text style={{color: '#3CB878'}}><strong>$250</strong></Card.Text>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: 'gold'}} ></FontAwesomeIcon>
                        </Card.Body>
                    </Card>
                    <Card className='text-start'>
                        <Card.Img variant="top" src="" style={{backgroundColor: 'black', width: '100%', height: 300}}/>
                        <Card.Body>
                        <Card.Title>Cruise Dual Analog</Card.Title>
                        <Card.Text style={{color: '#3CB878'}}><strong>$250</strong></Card.Text>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: 'gold'}} ></FontAwesomeIcon>
                        </Card.Body>
                    </Card>
                    
                </CardGroup>
            </div>
        </div>
    );
};

export default BestSeller;