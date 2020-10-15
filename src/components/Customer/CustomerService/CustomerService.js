import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';
import { UserContext } from '../../../App';


const CustomerService = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://stormy-river-26718.herokuapp.com/orderList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

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
                        <h5>Service List</h5>
                    </div>
                    <div className="right">
                        <h6>{loggedInUser.name}</h6>
                    </div>
                </div>
                <div className="contact-area">
                    <div className="row">
                        {
                            orderList.map(order => <CustomerServiceList order={order} key={order._id}></CustomerServiceList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerService;