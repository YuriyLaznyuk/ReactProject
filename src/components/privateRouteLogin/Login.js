import React, {useState, useEffect} from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import "./login.css";

function Login(props) {
    const {state} = useLocation();
    const {from} = state || {from: {pathname: "/"}};
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    useEffect(() => {
        setPasswordValid(
            /^admin$/.test(password)
        );
    }, [password]);

    const login = () => {
        fakeAuthentication.methodAuthentication(() =>
            (passwordValid && password !== '') ? setRedirectToReferrer(true) : fakeAuthentication.isAuthentication = false
        );
    };

    if (redirectToReferrer) {
        return <Redirect to={from}/>;
    }

    return (
        <div className='Login'>
            <p className='Login__p'>You must log in to view the page at {from.pathname}</p>
            {(!passwordValid && password.length > 0) && <span className='Login__span'>Invalid password</span>}
            <label htmlFor="pass">Password admin</label>
            <input type="text" id='pass'
                   onChange={e => setPassword(e.target.value)}/>
            <input type="button" value='Password in' onClick={login}/>
        </div>
    );
}

export const fakeAuthentication = {
    isAuthentication: false,
    methodAuthentication(colback) {
        this.isAuthentication = true;
        setTimeout(colback, 100);

    }
};

export default Login;