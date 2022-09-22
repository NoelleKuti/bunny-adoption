import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'


const NavBar = () => {
    const { handleLogout, authKey, checkAuth } = useAppContext();
    

   


    return (
        <div className='navbar row'>
            {checkAuth(authKey) 
                ? <button className='navLink' as='Link' onClick={() => {
                    handleLogout()}} >
                    logout
                </button>
                : <Link className='navLink' to='/login'>
                    login
                </Link>
            }
            <Link className='navLink' to='/apply'>{authKey ? 'view applications' : 'apply to adopt'}</Link>
        </div>
    )
}

export default NavBar