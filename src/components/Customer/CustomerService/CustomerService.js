import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';

const serviceOrderList = [
    {
        id : '1',
        img : service1,
        status : 'Pending' ,
        title : 'Web & Mobile design',
        description : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        img : service2,
        status : 'Done' ,
        title : 'Graphic design',
        description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        id : '2'
    }
]

const CustomerService = () => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <Link to="/"><img style={{ width: '150px', paddingTop: '25px' }} src={logo} alt="" /></Link>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link className="list-item" to="/order">Order</Link>
                        </li>
                        <li>
                            <Link className="list-item" to="service">Service List</Link>
                        </li>
                        <li>
                            <Link className="list-item" to="/review">Review</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-9">
                <div className="header">
                    <div className="left">
                        <h5>Order</h5>
                    </div>
                    <div className="right">
                        <h6>Pro Rasel</h6>
                    </div>
                </div>
                <div className="contact-area">
                    <div className="row">
                        {
                            serviceOrderList.map(service => <CustomerServiceList service={service} key={service.id}></CustomerServiceList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerService;