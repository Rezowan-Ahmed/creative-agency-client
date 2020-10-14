import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const AddService = () => {
    const { register, handleSubmit } = useForm();
    

    const onSubmit = data => {
        const image = data.file[0];
        console.log(data);
        const formData = new FormData()
        formData.append('image', image);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('http://localhost:9000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    alert('Service Added Successfully');
                }

            })
            .catch(error => {
                alert('failed upload')
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
                            <h5>Add Services</h5>
                        </div>
                        <div className="right">
                            <h6>Pro Rasel</h6>
                        </div>
                    </div>
                    <div className="contact-area p-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex admin-service'>
                            <div>
                                <label style={{ fontWeight: '500' }}>Service Title</label>
                                <input type="text" name="title" style={{ width: '480px', padding: '20px 10px' }} placeholder='Enter title' className='form-control' ref={register({ required: true })} /> <br />
                                <label style={{ fontWeight: '500' }}>Description</label>
                                <textarea  name="description" style={{ width: '480px', padding: '20px 10px' }} placeholder='Enter Designation' className='form-control' ref={register({ required: true })}/>
                            </div>
                            <div className="ml-4">
                                <label style={{ width: '200px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", marginTop: '30px', borderRadius: '5px' }} class="custom-file-upload ml-3 p-2 text-center">
                                    <input style={{ display: "none" }} name="file" type="file" ref={register({ required: true })}/>
                                         Upload image
                                    </label>
                            </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <input type="submit" className="admin-service-submit-btn" />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddService;



// <form onSubmit={handleSubmit}>
//     <div className='d-flex admin-service'>
//         <div>
//             <label style={{ fontWeight: '500' }}>Service Title</label>
//             <input onBlur={handleBlur} type="text" name="title" style={{ width: '480px', padding: '20px 10px' }} placeholder='Enter title' className='form-control' /> <br />
//             <label style={{ fontWeight: '500' }}>Description</label>
//             <textarea onBlur={handleBlur} name="description" style={{ width: '480px', padding: '20px 10px' }} placeholder='Enter Designation' className='form-control' />
//         </div>
//         <div className="ml-4">
//             <label style={{ width: '200px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444", marginTop: '30px', borderRadius: '5px' }} class="custom-file-upload ml-3 p-2 text-center">
//                 <input onChange={handleFileChange} style={{ display: "none" }} name="file" type="file" />
//                                          Upload image
//                                     </label>
//         </div>
//     </div>
//     <div className='d-flex justify-content-end'>
//         <input type="submit" className="admin-service-submit-btn" />
//     </div>
// </form>