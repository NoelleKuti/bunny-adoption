import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext.js'


const NavBar = () => {
    const { handleLogout, isLoggedIn } = useAppContext();

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
				<Link 
					className='navLink' 
					to={isLoggedIn ? '/admin-dashboard' : '/apply'}>
					
						{isLoggedIn ? 'view applications' : 'apply to adopt'}
				</Link>
				<Link 
					className='navLink' 
					to='/'
				>
					home
				</Link>
			</div>
        </div>
    )
}

export default NavBar