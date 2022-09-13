import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md'


const BunnyCard = (props) => {
    const { objectId, bunnyData } = props;
    const { bunnyName, description, temperament, age, variation, imageLink } = bunnyData;
 
    const { deleteBunny, chooseBunnyToEdit } = useAppContext();
    

    return (
        <CardStyles className='column'>
            <div className='card'>
                <div className='cardHeader row'>
                    <h2>{bunnyName}</h2>
                    <div className='buttonContainer row'>
                        <MdOutlineModeEdit
                        as='button'
                        className='button'
                            onClick={() => {
                                chooseBunnyToEdit(objectId, bunnyData);
                            }} />
                           
                        <MdDeleteOutline
                        as='button' className='button' onClick={() => window.confirm(`You are about to delete ${bunnyName}. Are you sure?`) && deleteBunny(objectId)}/>
                    </div>
                </div>
                <div className='cardText'>
                    <p>
                        Description: {description}
                    </p>
                    <p>
                        Temperament: {temperament}
                    </p>
                    <p>
                        Age: {age} 
                    </p>
                    <p>
                        Variation: {variation}
                    </p>
                </div>
                <image src={imageLink} alt='bunny' />
            </div>
        </CardStyles>
    )
}

const CardStyles = styled.div`
    .card {
        width: 400px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: var(--50);
        margin: 1rem 1rem 1rem 1rem;
        
        justify-content: space-between;
    }
    .cardHeader {
        width: 90%;
        margin: 0px auto; 
        padding: 1rem; 
        justify-content: space-between;
        h2 {
            margin-left: 10px;
            font-size: 25px;
        }
        .buttonContainer {
            width: 50%;
            align-items: flex-end;
            justify-content: flex-end;
            button {
                margin: 0 10px 10px 0;
            }
        }
    }
    .cardText {
        padding: 1rem;
    }
    span {
        font-weight: 700;
        text-decoration: underline;
    }
    .timeStamps {
        font-size: 10px;
        padding: 1rem;
        justify-self: flex-end;
        border-top: 1px solid var(--500);
        background-color: var(--100);
        border-radius: 0 0 20px 20px;
    }
    .button {
        width: 2rem;
        height: 2rem;
        padding: 1rem;
        border: none;
        margin: 5px 5px 5px 5px;
        border-radius: 50%;
        background-color:var(--300);
        color: white;
        align-content: center;
        cursor: pointer;
        :hover {
            background-color:var(--400);
        }
    }


`
export default BunnyCard