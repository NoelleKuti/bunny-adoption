import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import Alert from './Alert'
import { useNavigate  } from 'react-router-dom'



const Login = () => {

    const { showAlert, handleTextInput, login, handleLogin } = useAppContext();
    const {userName, password} = login;

    const navigate = useNavigate();
    const [values, setValues] = useState({isAdmin: false});

    

    const toggleAdmin = () => {
        setValues({ isAdmin: !values.isAdmin});
    }

    const onSubmitForm = (e) => {
        handleLogin(e, {userName, password});
        toggleAdmin();
    }

    
    useEffect(() => {
        if (values.isAdmin) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [values.isAdmin, navigate]);
    

    return (
        <form name='loginForm' className='row' onSubmit={onSubmitForm}>
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