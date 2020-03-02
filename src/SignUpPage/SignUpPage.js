import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import SignUpForm from './components/SignUpForm'
import myFirebase from '../fire.js'

function SignUpPage() {
    const history = useHistory();
    const authState = useContext(AuthContext);
    const [signUpState, setSignUpState] = useState();

    const signUp = (e) => {
        e.preventDefault();
        if (signUpState.email)
        myFirebase.auth().createUserWithEmailAndPassword(signUpState.email, signUpState.password).then(user => {authState.setAuthState({user: user, isLoading: false, isAuthenticated: true});
        history.push('/dashboard')
    })
    }

    const handleInputs = (e) => {
        let value = e.target.value
        setSignUpState({
            ...signUpState,
            [e.target.name]: value
        })
    }

    return (
        <div>
            <SignUpForm handleSignUp={signUp} handleInputs={handleInputs} />
        </div>
    )
}

export default SignUpPage
