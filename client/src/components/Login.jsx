import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import Alert from './Alert'
import { useNavigate  } from 'react-router-dom'



const Login = () => {

    const { showAlert, handleTextInput, login, handleLogin, checkAuth, authKey, isLoggedIn } = useAppContext();
    const {userName, password} = login;

    const navigate = useNavigate();
  

    const onSubmitForm = (e) => {
        handleLogin(e, {userName, password});
    }

    
    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [isLoggedIn, navigate]);
    

    return (
        <form id='login' name='loginForm' className='column' onSubmit={onSubmitForm}>
            {<Alert />}
				<div className='column loginCol'>
					<p>UserName:</p>
					<input 
						type= 'text'
						name='userName'
						defaultValue = {userName}
						onChange = {(e) => {handleTextInput({e:e, formName:'login'})}}
					/>
				</div> 
				<div className='column loginCol'>
					<p>Password:</p><input
						type='password'
						name='password'
						defaultValue = {password}
						onChange = {(e) => {handleTextInput({e:e, formName:'login'})}}
					/>
                </div>
			<button type='submit' className='submitBtn'>Log In</button>
          
        </form>



    )


}


export default Login