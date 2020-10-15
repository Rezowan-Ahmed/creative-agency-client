import React, { useEffect, useState } from 'react';
import Clients from '../Clients/Clients';

const Client = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://stormy-river-26718.herokuapp.com/getFeedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div className='container text-center'>
            <h1 className="text-center mt-5">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
           <div className='row'>
            {
                feedbacks.map(feedback => <Clients feedback={feedback}></Clients>)
            }
           </div>
        </div>
    );
};

export default Client;