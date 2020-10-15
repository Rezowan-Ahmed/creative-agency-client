import React from 'react';
import customer1 from '../../../images/customer-1.png';

const Clients = ({ feedback }) => {
    const { name, position, statement } = feedback;
    return (
        <div className="col-md-4 my-5">
            <div className="single-item feedback">
                <div className="card p-3" style={{height: '250px'}}>
                    <div className="card-body">
                        <div className='d-flex'>
                            <img src={customer1} alt="" className="card-img-top " style={{ height: '64px', width: '64px' }} />
                            <div className=' ml-3'>
                                <div className="card-title">
                                    <h3 style={{fontSize: '20px'}}>{name}</h3>
                                </div>
                                <p style={{fontSize: '15px'}}>{position}</p>
                            </div>
                        </div>
                        <p style={{fontSize: '14px'}}>{statement}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;