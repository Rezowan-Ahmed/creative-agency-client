import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { title, description } = service;
    const iconStyle = {
        height: '74px',
        width: '74px'
    }
    return (

        <div className="col-md-4">
            <Link style={{textDecoration: 'none'}} to={`/order/${service.title}`}>
                <div className="text-center provide-service-box m-2 p-5">
                    <img style={iconStyle} src={`data:image/png;base64,${service.image.img}`} />
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Services;