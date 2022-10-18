import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext'
import Application from './Application';

const Dashboard = () => {
	const { fetchApplications, applications, checkAuth, isLoggedIn } = useAppContext();

	const navigate = useNavigate();

	useEffect(() => {
		fetchApplications();
		if (localStorage.getItem('creds')) {
			checkAuth(localStorage.getItem('creds'))
		}

		if (isLoggedIn === false) {
			navigate('/');
		}
	}, [isLoggedIn]);

	return (
		<div>
		{
			applications.map((item) => {
				return (
					<div className='margin-top application' key={`divKey${item._id}`}>
						<h2 className='formHeader row' key={`headerKey${item._id}`}>
							<p key={`p1${item._id}`}>
								{ `${applications.indexOf(item)} email: ${item.aboutYou.email}` }
							</p>
							 <p key={`p2${item._id}`}>
							 	{ `phone: ${item.aboutYou.phone}` }
							 </p>
							 <p key={`p3${item._id}`}>
							 	{`address: ${item.aboutYou.address}` }
							 </p>
						</h2>
						<Application data={item} itemId={item._id} key={`key_${item._id}`}/>
						
					</div>
				);
			})
		}

		<p> That's the end of the applications! </p>

		</div>
  )
}

export default Dashboard