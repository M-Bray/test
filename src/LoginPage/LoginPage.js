import React, { useState, useContext} from 'react'
import {useHistory, Redirect} from 'react-router-dom';
import LoginForm from './components/LoginForm'
import myFirebase from '../fire.js'
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {
    const authState = useContext(AuthContext);
    const [loginState, setLoginState] = useState();
    const history = useHistory();

    const login = (e) => {
        e.preventDefault();
        myFirebase
        .auth()
        .signInWithEmailAndPassword(loginState.email, loginState.password)
        .then(() => {   
          console.log("successfull login");
          history.push('/dashboard')})
        .catch(error => console.log(error.message));
    };
    
    const handleInputs = (e) => {
        let value = e.target.value
        setLoginState({
            ...loginState,
            [e.target.name]: value
        })
    }

    return (
        <div className="login-page-container">
            <LoginForm handleLogin={login} handleInputs={handleInputs} />
        </div>
    )
}

export default LoginPage
