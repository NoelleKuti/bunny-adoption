import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
const Login = () => {
const { userName, password } = useAppContext();

    return (
        <LoginForm>
            <p> UserName </p>
            <input 
                type= 'text'
                name='userName'
                defaultValue = {userName !== undefined && userName}
            /> 
            <input
                type='password'
                name='password'
                defaultValue = {password !== undefined && password}
            />

        </LoginForm>



    )


}

const LoginForm = styled.form `
    margin: 0px auto;


`
export default Login