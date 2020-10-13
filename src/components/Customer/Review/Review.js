import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Review = () => {
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
                            <form action="" className="form-area">
                                <input className="text-control mb-3" type="text" name="" id="" placeholder="Your name"/>
                                <input className="text-control mb-3" type="text" name="" id="" placeholder="Company's name.Designation"/>
                                <textarea className="details-area mb-3" name="" id="" cols="30" rows="10" placeholder="Description"></textarea><br/>
                                <input className="order-btn mt-1" type="submit" name="" id=""/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;