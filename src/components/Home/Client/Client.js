import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import Clients from '../Clients/Clients';

const feedback = [
    {
        name: 'Nash Patrik',
        position: 'CEO,Manpol',
        statement: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolore eum reiciendis delectus, eos veniam placeat incidunt autem repudiandae aliquid.',
        img: customer1
    },
    {
        name: 'Miriam Barron',
        position: 'CEO,Manpol',
        statement: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolore eum reiciendis delectus, eos veniam placeat incidunt autem repudiandae aliquid.',
        img: customer2
    },
    {
        name: 'Bria Malone',
        position: 'CEO,Manpol',
        statement: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolore eum reiciendis delectus, eos veniam placeat incidunt autem repudiandae aliquid.',
        img: customer3
    }
]

const Client = () => {
    return (
        <div className='container text-center'>
            <h1 className="text-center mt-5">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
           <div className='row'>
           <div className='row'>
            {
                feedback.map(feedback => <Clients feedback={feedback}></Clients>)
            }
           </div>
           </div>
        </div>
    );
};

export default Client;