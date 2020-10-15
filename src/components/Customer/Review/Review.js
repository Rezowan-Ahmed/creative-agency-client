import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const onSubmit = data => {
       const customerFeedback = {...data}
        fetch('http://localhost:9000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customerFeedback)
        })
        .then(res => res.json())
        .then(result => {
            alert('Order successfully done')
        })
    }


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
                                <h5>Review</h5>
                            </div>
                            <div className="right">
                                <h6>{loggedInUser.name}</h6>
                            </div>
                        </div>
                        <div className="contact-area">
                            <form onSubmit={handleSubmit(onSubmit)} className="form-area">
                                <input className="text-control mb-3" type="text" name="name" placeholder="Your name" ref={register({ required: true })}/>
                                <input className="text-control mb-3" type="text" name="position"  placeholder="Company's name Designation" ref={register({ required: true })}/>
                                <textarea className="details-area mb-3" name="statement"  cols="30" rows="10" placeholder="Description" ref={register({ required: true })}></textarea><br/>
                                <input className="order-btn mt-1" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;