import React from 'react';

const Services = ({service}) => {
    const {title, description, icon} = service;
    const iconStyle={
        height: '74px',
        width: '74px'
    }
    return (
       
        <div className="col-md-4">
            <div className="text-center provide-service-box m-2 p-5">
                <img style={iconStyle} src={icon} alt=""/>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Services;