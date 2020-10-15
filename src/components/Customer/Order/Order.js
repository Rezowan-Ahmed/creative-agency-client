import React, { useContext } from 'react';
import './Order.css';
import logo from '../../../images/logos/logo.png';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Order = () => {
    const {title} = useParams();
    const { register, handleSubmit } = useForm();
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = data => {
      const allOrders = {...data, ...loggedInUser, title}
      fetch('http://localhost:9000/addOrders', {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(allOrders)
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
                                    <Link className="list-item" to="/order/service">Service List</Link>
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
                                <h6>{loggedInUser.name}</h6>
                            </div>
                        </div>
                        <div className="contact-area">
                            <form onSubmit={handleSubmit(onSubmit)} className="form-area">
                                <input className="text-control mb-3" type="text"  defaultValue={loggedInUser.name} placeholder="Your name/ Company's name" ref={register({ required: true })}/><br/>
                                <input className="text-control mb-3" type="email" defaultValue={loggedInUser.email} placeholder="Your email address" ref={register({ required: true })}/><br/>
                                <input className="text-control mb-3" type="text" defaultValue={title} placeholder="Graphic Design" ref={register({ required: true })}/><br/>
                                <textarea className="details-area mb-3" name="description"  cols="30" rows="10" placeholder="Project Details" ref={register({ required: true })}></textarea><br/>
                                <input className="price" type="text" name="price" placeholder="Price" ref={register({ required: true })}/>
                                <label style={{width:'271px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", borderRadius: '5px' }} class="custom-file-upload ml-3 p-2 text-center">
                                    <input style={{ display: "none" }} type="file" ref={register({ required: true })}/> upload project file 
                                </label><br/>
                                <input className="order-btn mt-4" type="submit" value='send' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Order;
