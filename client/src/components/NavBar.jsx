import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'


const NavBar = () => {
    const { handleLogout, authKey, checkAuth, isLoggedIn } = useAppContext();
    

   


    return (
        <div className='navbar'>
            <div className='navLinks'>
				{isLoggedIn 
					? <button className='navLink' as='Link' onClick={() => {
						handleLogout()}} >
						logout
					</button>
					: <Link className='navLink' to='/login'>
						login
					</Link>
				}
				<Link className='navLink' to='/apply'>{isLoggedIn ? 'view applications' : 'apply to adopt'}</Link>
			</div>
        </div>
    )
}

export default NavBar