import React from 'react';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const PhotoStyle = {
        width: '150px',
        height: '47px'
    }
    const loginStyle={
        width: '134px',
        height: '45px',
        background: '#111430',
        borderRadius: '5px'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand mr-auto pt-2" href="#"><img style={PhotoStyle} src={logo} alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pt-5">
                    <li className="nav-item active">
                        <a className="nav-link mr-3" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a style={loginStyle} className="nav-link mr-5 text-white text-center" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;