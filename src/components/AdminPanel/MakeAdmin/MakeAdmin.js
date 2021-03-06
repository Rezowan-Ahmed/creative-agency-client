import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const allAdmins = {...data}
        fetch('https://stormy-river-26718.herokuapp.com/makeAdmin', {
              method: 'POST',
              headers: { 
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify(allAdmins)
          })
          .then(res => res.json())
          .then(result => {
              alert('admin successfully done')
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
                        <div className="contact-area p-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="admin-service">
                            <label style={{fontWeight: '500'}}>Email</label>
                                    <div className=" d-flex">
                                    <input type="email" name="email" style={{ width: '480px', padding: '20px 10px' }} placeholder='jon@gmail.com' className='form-control' ref={register({ required: true })} ref={register({ required: true })}/>
                                    <input type="submit" className="admin-make-submit-btn"/>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MakeAdmin;