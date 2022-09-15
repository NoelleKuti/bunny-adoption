import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyCard from './BunnyCard'
import BunnyForm from './BunnyForm/BunnyForm'

const BunniesContainer = () => {
    const { fetchBunnies, bunniesData, showForm, toggleShowForm } = useAppContext();   

  
    !showForm 
    ?   <BunnyForm/>
    : 
        
        <ContainerStyles>
            <button 
                className='showFormButton' 
                type='button' 
                onClick={() => {toggleShowForm('add')}}>
                    Add Bunnies!
            </button> 
    
            {bunniesData.map((item) => {
                <div className='column container'>
                    <BunnyCard 
                        key={'k'+item._id} 
                        objectId={item._id.toString()} 
                        bunnyData={item}
                    />
                </div>
            })} 
        </ContainerStyles>
}

const ContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
`
export default BunniesContainer