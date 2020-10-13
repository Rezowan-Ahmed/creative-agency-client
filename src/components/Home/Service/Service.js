import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import Services from '../Services/Services';

const services = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product',
        icon: service1
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
        icon: service2
    },
    {
        title: 'Wed development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
        icon: service3
    }
]

const Service = () => {
    return (
        <div className="container mb-5">
            <h3 className="text-center mt-5">Provide awesome <span style={{color:'#7AB259'}}> Services</span></h3>
            <div className="row d-flex justify-content-around mt-5">
                {
                    services.map(service => <Services service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;