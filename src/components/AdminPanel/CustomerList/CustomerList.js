import React, { useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';


const CustomerList = () => {
    const [allCustomer, setAllCustomer] = useState([]);

    useEffect(() => {
        fetch('https://stormy-river-26718.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllCustomer(data))
    }, [])

    console.log(allCustomer);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Link to="/"><img style={{ width: '150px', paddingTop: '25px' }} src={logo} alt="" /></Link>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link className="list-item" to="/customerList">Service List</Link>
                            </li>
                            <li>
                                <Link className="list-item" to="addService">Add Service</Link>
                            </li>
                            <li>
                                <Link className="list-item" to="/makeAdmin">Make Admin</Link>
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
                    <div className="contact-area" style={{ padding: '35px' }}>
                        <table class="table" className="admin-service-list p-5">
                            <thead style={{borderBottom: '1px solid gray'}}>
                                <tr style={{height: '50px', color: 'gray'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allCustomer.map((list) =>

                                        <tr>
                                            <td>{list.name}</td>
                                            <td>{list.email}</td>
                                            <td>{list.title}</td>
                                            <td style={{width: '270px'}}>{list.description}</td>
                                            <td className="text-primary">Done</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerList;