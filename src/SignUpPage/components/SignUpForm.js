import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';


function SignUpForm({ handleInputs, handleSignUp }) {
    return (
        <div className="form-container">
            <form className="form-wrap">
                <h1 className="form-header">Sign Up</h1>
                <div className="form-input-wrap">
                    <label className="form-label" htmlFor="email">E-mail:</label>
                    <input className="form-input" onChange={handleInputs} name="email"></input>
                </div>
                <div className="form-input-wrap">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input" onChange={handleInputs} name="password"></input>
                </div>
                <button className="form-button" onClick={handleSignUp}>Sign Up</button>
                <Link className="link-class" to="/login">Exisiting Users</Link>
            </form>
        </div>
    )
};

export default SignUpForm
