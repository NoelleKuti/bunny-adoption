import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyCard from './BunnyCard'
import BunnyForm from './BunnyForm/BunnyForm'

const BunniesContainer = () => {
    const { fetchBunnies, bunniesData, showForm, toggleShowForm, checkAuth, isLoggedIn } = useAppContext();   

	useEffect(() => {
		fetchBunnies();
		if (localStorage.getItem('creds')) {
			checkAuth(localStorage.getItem('creds'))
		}
	}, [])
	

    if (isLoggedIn && showForm) { 
    	return <BunnyForm/>
	} else { 
        return (
			<ContainerStyles className='column'>
				<div className='addButtonContainer'>
					{ isLoggedIn && 
						<button 
							className='showFormButton'
							type='button' 
							onClick={() => {checkAuth(localStorage.getItem('creds')) && toggleShowForm('add')}}>
								Add Bunnies!
						</button> 
					}
				</div>
				<div className='row container'>
				{bunniesData && bunniesData.map((item) => {
					//console.log(item);
					return (
						<BunnyCard 
							key={'k'+item._id} 
							objectId={item._id.toString()} 
							bunnyData={item}
						/>
					);
					
				})}
				</div>
			</ContainerStyles>
		)
	}
}
const ContainerStyles = styled.div`
	width: 100%;
	margin: 0 auto;

	.showFormButton {
		width: 25%;
	}

	.addButtonContainer {
		height: 1rem;
		display: flex;
		margin-top: 6rem;
	}
`
export default BunniesContainer