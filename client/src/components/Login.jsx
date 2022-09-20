import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

import Alert from './Alert'


const Login = () => {

    const { login, showAlert, clearAlert, handleTextInput } = useAppContext();

    const {userName, password} = login;

    const handleLogin = (e) => {
        e.preventDefault();
        if (e.target.userName !== 'bunnyuser' || e.target.password !== 'bunnypassword') {
            showAlert({alertType: 'danger', alertText: 'username or password are not correct'});
            setTimeout((clearAlert(), 5000));
        } else {
            showAlert({alertType: 'success', alertText: 'login successful! redirecting...'});
            setTimeout((clearAlert(), 5000));
        }
    }

    return (
        <LoginForm className='row'>
            {showAlert && <Alert />}
            <div className='column'>
                <p>UserName:</p>
                <input 
                    type= 'text'
                    name='userName'
                    defaultValue = {userName}
                    onChange = {(e) => {handleTextInput({e:e, formName:'login'})}}
                />
            </div> 
            <div className='column'>
                <p>Password:</p><input
                    type='password'
                    name='password'
                    defaultValue = {password}
                    onChange = {(e) => {handleTextInput({e:e, formName:'login'})}}
                />
                  <button type='submit' onClick={(e) => handleLogin(e)}>Log In</button>
            </div>
          
        </LoginForm>



    )


}

const LoginForm = styled.form `
    margin: 0px auto;


`
export default Login