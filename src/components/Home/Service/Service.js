import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://stormy-river-26718.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

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