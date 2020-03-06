import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';


function LoginForm({ handleInputs, handleLogin }) {
    return (
        <div className="site-container">
            <div className="card-container">
                <form className="form-container">
                    <h1 className="card-header">Login</h1>
                    <div className="card-input-wrap">
                        <label className="card-label" htmlFor="email">E-mail:</label>
                        <input className="card-input" onChange={handleInputs} name="email"></input>
                    </div>
                    <div className="card-input-wrap">
                        <label className="card-label" htmlFor="password">Password:</label>
                        <input className="card-input" onChange={handleInputs} name="password"></input>
                    </div>
                    <button className="card-button" onClick={handleLogin}>Login</button>
                    <Link className="link-class" to="/">Sign Up</Link>
                </form>
            </div>
        </div>
    )
};

export default LoginForm
