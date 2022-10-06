import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Application from './Application';

const Dashboard = () => {
	const { fetchApplications, applications, checkAuth, deleteApplication } = useAppContext();

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
					<>
						<Application data={item} key={`key_${item._id}`}/>
						
						<button key={`button_${item._id}`} onClick={() => deleteApplication(item._id)}>
							delete
						</button>
					</>
				);
			})
		}

		</div>
  )
}

export default Dashboard