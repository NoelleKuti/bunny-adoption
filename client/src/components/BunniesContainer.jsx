import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyCard from './BunnyCard'
import BunnyForm from './BunnyForm/BunnyForm'
import NavBar from './NavBar'

const BunniesContainer = () => {
    const { fetchBunnies, bunniesData, showForm, toggleShowForm, checkAuth, authKey } = useAppContext();   

	console.log(checkAuth(authKey));

	useEffect(() => {
		fetchBunnies();
		checkAuth();

	}, [])
	

    if (checkAuth(authKey) && showForm) { 
    	return <BunnyForm/>
	} else { 
        return (
			<ContainerStyles>
				<NavBar />
				{ checkAuth(authKey) && 
					<button 
						className='showFormButton'
						type='button' 
						onClick={() => {toggleShowForm('add')}}>
							Add Bunnies!
					</button> 
				}
				<div className='row container'>
				{bunniesData.map((item) => {
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
	width: 80%;
	margin: 0px auto;
`
export default BunniesContainer