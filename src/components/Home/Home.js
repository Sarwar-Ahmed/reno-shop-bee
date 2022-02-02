import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import BestSeller from './BestSeller/BestSeller';
import ServiceAndCollection from './ServiceAndCollection/ServiceAndCollection';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Discount from './Discount/Discount';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <BestSeller/>
            <ServiceAndCollection/>
            <FeaturedProducts/>
            <Discount/>
        </div>
    );
};

export default Home;