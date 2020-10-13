import React from 'react';

const CustomerServiceList = ({service}) => {
    const {img, status, title, description} = service;
    return (
        <div className='col-md-6'>
            <div className="service-box">
                <div className="d-flex justify-content-between">
                    <div>
                        <img style={{width:'80px'}} src={img} alt="icon"/>
                    </div>
                    <div>
                        <button className="mt-1 btn-status">{status}</button>
                    </div>
                </div>
                <div className='mt-3 pb-3'>
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default CustomerServiceList;