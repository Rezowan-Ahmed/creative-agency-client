import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../../images/google.png';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                console.log(result);
            const { displayName, email } = result.user;
            const googleSignInUser = { name: displayName, email: email };
            setLoggedInUser(googleSignInUser);
            history.replace(from)
        }).catch(error => {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.message = error.message;
            setLoggedInUser(newUserInfo);
        });
    }
    return (
        <div>
            <img style={{ width: '202px', height: "60px", margin: "44px 662px 44px 575px" }} src={logo} alt="logo" />
            <div className="login_form">
                <h4 className="text-center mt-5 mb-5">Login With</h4>
                <div className="d-flex justify-content-center">
                    <div onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }} className="google">
                        <img style={{ width: '30px', height: '30px', marginRight: '10px' }} src={google} alt="google icon" />
                        <p className="ml-5">Continue with Google</p>
                    </div>
                </div>
                <p className='text-center'><span>Don’t have an account? <Link to='/login' >Create an account</Link></span></p>
            </div>
        </div>
    );
};

export default Login;