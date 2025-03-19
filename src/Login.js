import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';    
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                history('/');
            })
            .catch(error => alert(error.message));
    }
    
    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history('/');
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to='/' >
                <img className='login_logo' src='https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg' alt='amazon-logo' />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing -in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based Ads Notice.
                </p>
                <button onClick={register} type='submit'
                    className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
