import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';


function LoginForm({ handleInputs, handleLogin }) {
    return (
        <div className="form-container">
            <form className="form-wrap">
                <h1 className="form-header">Login</h1>
                <div className="form-input-wrap">
                    <label className="form-label" htmlFor="email">E-mail:</label>
                    <input className="form-input" onChange={handleInputs} name="email"></input>
                </div>
                <div className="form-input-wrap">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input" onChange={handleInputs} name="password"></input>
                </div>
                <button className="form-button" onClick={handleLogin}>Login</button>
                <Link className="link-class" to="/">Sign Up</Link>
            </form>
        </div>
    )
}

export default LoginForm
