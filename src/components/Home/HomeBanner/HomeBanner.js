import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='homeBanner row text-start p-5'>
            <div className='col-md-6 p-5 mb-5 mt-5'>
                <h1>THE BEST <br /><span style={{color: '#3CB878'}}>WOOCOMMMERCE</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est inventore architecto eum corrupti nesciunt?</p>
                <button className="btn btn-dark text-secondary pl-5 pr-5">BUY NOW</button>
            </div>
        </div>
    );
};

export default HomeBanner;