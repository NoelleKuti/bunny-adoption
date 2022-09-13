import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyCard from './BunnyCard'

const BunniesContainer = () => {
    const { fetchBunnies, bunniesData } = useAppContext();

    useEffect(() => {
        fetchBunnies()
    }, [bunniesData]);
    
    
    
        return (
      <ContainerStyles>
           {bunniesData.map((item) => {
                return (
                    <BunnyCard 
                        key={'k'+item._id} objectId={item._id.toString()} 
                        bunnyData={item}/>
                )
            })} 
      </ContainerStyles>
  )
}

const ContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
`
export default BunniesContainer