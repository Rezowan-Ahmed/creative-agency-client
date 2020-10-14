import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link, useHistory } from 'react-router-dom';

const Review = () => {
    const [review, setReview] = useState({})
    const history = useHistory()

    const handleSubmit = e => {
        fetch('http://localhost:9000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Submit Successfully')
                history.pushState('/')
            }
        })
        .catch(error => {
            alert('Failed! Try again later')
        })
        e.preventDefault();
    }


    const handleBlur = (e) => {
        const reviews = {...review}
        reviews[e.target.name] = e.target.value
        setReview(reviews)
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
                                <h5>Order</h5>
                            </div>
                            <div className="right">
                                <h6>Pro Rasel</h6>
                            </div>
                        </div>
                        <div className="contact-area">
                            <form onSubmit={handleSubmit} className="form-area">
                                <input onBlur={handleBlur} className="text-control mb-3" type="text" name="name" placeholder="Your name"/>
                                <input onBlur={handleBlur}  className="text-control mb-3" type="text" name="position"  placeholder="Company's name.Designation"/>
                                <textarea onBlur={handleBlur}  className="details-area mb-3" name="statement"  cols="30" rows="10" placeholder="Description"></textarea><br/>
                                <input className="order-btn mt-1" type="submit" name="" id=""/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;