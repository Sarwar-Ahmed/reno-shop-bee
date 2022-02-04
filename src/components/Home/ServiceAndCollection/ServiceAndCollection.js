import React from 'react';
import './ServiceAndCollection.css';

const ServiceAndCollection = () => {
    return (
        <div >
            {/* Services */}
            <div className="row pt-5 p-3"style={{backgroundColor: '#F5F6F9'}}>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/JrbPvJc/diamond.png" alt="diamond" className='fluid mb-1' style={{width: 32, height: 32}}/>
                    <p className='p-2'><strong>SPECIAL OFFERS</strong><br /><small className='text-muted'>Shop big Save Big</small></p>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/MVxcSYh/plane-2.png" alt="plain" className='fluid mb-1' style={{width: 32, height: 32}}/>
                    <p className='p-2'><strong>FREE DELEBIRY</strong><br /><small className='text-muted'>On orders Above $99</small></p>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/VHPnDzj/share.png" alt="share" className='fluid mb-1' style={{width: 32, height: 32}}/>
                    <p className='p-2'><strong>30 DAYS RETURN</strong><br /><small className='text-muted'>Policy We Offers</small></p>
                </div>
                <div className="col-md-3">
                    <img src="https://i.ibb.co/j41Pt5F/rocket.png" alt="rocket" className='fluid mb-1' style={{width: 32, height: 32}}/>
                    <p className='p-2'><strong>FASTEST SHIPPING</strong><br /><small className='text-muted'>2 Days Express</small></p>
                </div>
            </div>
            {/* Collections */}
            <div className="row">
                <div className="col-md-4 p-5" style={{backgroundColor: '#2E3348'}}>
                    <a href="/"><img src="https://i.ibb.co/0MBLqsf/Summer-Autumn.png" alt="" className='fluid w-100'/></a>
                </div>
                <div className="col-md-4 p-5" style={{backgroundColor: '#34394F'}}>
                    <a href="/"><img src="https://i.ibb.co/M2zKsXk/slider-9-1-1.png" alt="" className='fluid w-100'/></a>
                </div>
                <div className="col-md-4 p-5" style={{backgroundColor: '#2E3348'}}>
                    <a href="/"><img src="https://i.ibb.co/nzq5RGc/New-Fashion-Styles.png" alt="" className='fluid w-100'/></a>
                </div>
            </div>
        </div>
    );
};

export default ServiceAndCollection;