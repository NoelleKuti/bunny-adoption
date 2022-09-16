import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyCard from './BunnyCard'
import BunnyForm from './BunnyForm/BunnyForm'

const BunniesContainer = () => {
    const { fetchBunnies, bunniesData, showForm, toggleShowForm } = useAppContext();   

	useEffect(() => {
		fetchBunnies();
	}, [])


    if (showForm) { 
    	return <BunnyForm/>
	} else { 
        return (
			<ContainerStyles>
				<button 
					className='showFormButton'
					type='button' 
					onClick={() => {toggleShowForm('add')}}>
						Add Bunnies!
				</button> 
				<div className='column container'>
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
`
export default BunniesContainer