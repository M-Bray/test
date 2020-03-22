import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';


function SignUpForm({ handleInputs, handleSignUp }) {
    return (
        <div className="site-container">
            <div className="card-container">
                <form className="form-container">
                    <h1 className="card-header">Sign Up</h1>
                    <div className="card-input-wrap">
                        <label className="card-label" htmlFor="email">E-mail:</label>
                        <input className="card-input" onChange={handleInputs} name="email"/>
                    </div>
                    <div className="card-input-wrap">
                        <label className="card-label" htmlFor="password">Password:</label>
                        <input className="card-input" onChange={handleInputs} name="password"/>
                    </div>
                    <button className="card-button" onClick={handleSignUp}>Sign Up</button>
                    <Link className="link-class" to="/login">Exisiting Users</Link>
                </form>
            </div>
        </div>
    )
};

export default SignUpForm
