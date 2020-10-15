import React from 'react';
import service4 from '../../../images/icons/service4.png';

const CustomerServiceList = ({order}) => {
    const {title, description} = order;
    return (
        <div className='col-md-6'>
            <div className="service-box">
                <div className="d-flex justify-content-between">
                    <div>
                        <img style={{width:'80px'}} src={service4} alt="icon"/>
                    </div>
                    <div>
                        <button className="mt-1 btn-status">Done</button>
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