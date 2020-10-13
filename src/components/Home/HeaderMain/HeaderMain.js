import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    const frameStyle={
        width: '624.6px',
        height: '422.8px'
    }
    const loginStyle={
        width: '170px',
        height: '45px',
        background: '#111430',
        borderRadius: '5px',
        border: 'none'
    }
    return (
        <main className="row d-flex align-items-center mt-5">
            <div className="col-md-5 offset-md-0 col-sm-11">
                <h1 style={{fontWeight: '750'}}>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p style={{fontWeight: '600'}} className="mt-3">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Deserunt, nemo.adipisi <br/>asfjw ae cing elit</p><br/>
                <button className="text-white mt-2" style={loginStyle}>Hire Us</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid" style={frameStyle} src={Frame} alt=""/>
                
            </div>
        </main>
    );
};

export default HeaderMain;