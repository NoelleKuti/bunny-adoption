import React from 'react'
import { useAppContext } from '../context/appContext'
import Alert from './Alert'
import axios from 'axios'


const Login = () => {

    const { login, showAlert, clearAlert, handleTextInput, toggleShowAlert } = useAppContext();

    const {userName, password} = login;

    const handleLogin = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/api/v1/login/', {userName, password})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    return (
        <form name='loginForm' className='row' onSubmit={(e) => handleLogin(e)}>
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
                  <button type='submit'>Log In</button>
            </div>
          
        </form>



    )


}


export default Login