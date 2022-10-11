import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Application from './Application';

const Dashboard = () => {
	const { fetchApplications, applications, checkAuth } = useAppContext();

	useEffect(() => {
		fetchApplications();
		if (localStorage.getItem('creds')) {
			checkAuth(localStorage.getItem('creds'))
		}
	}, [])

	return (
		<div>
		{
			applications.map((item) => {
				return (
					<div className='margin-top application' key={`divKey${item._id}`}>
						<h2 className='formHeader' key={`headerKey${item._id}`}>
							{ `${applications.indexOf(item)} : ${item.aboutYou.email}` }
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