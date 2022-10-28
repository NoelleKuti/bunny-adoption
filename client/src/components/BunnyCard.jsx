import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext.js';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md'


const BunnyCard = (props) => {
    const { objectId, bunnyData } = props;
    const { bunnyName, description, temperament, age, variation, imageLink, linkTo } = bunnyData;
 
    const { deleteBunny, chooseBunnyToEdit, checkAuth, isLoggedIn } = useAppContext();


	let initial = false;

	if (!imageLink) {
		initial = true;
	}

    const [viewText, setViewText] = useState(initial);
	
    return (
        <CardStyles viewText = {viewText}>
            <div className='card column'>
                <div className='cardHeader row'>
                    <h2>{bunnyName}</h2>
                    {isLoggedIn &&
                        <div className='buttonContainer row'>
                            <MdOutlineModeEdit
                            as='button'
                            className='button cardBtn'
                                onClick={() => {
                                    checkAuth(localStorage.getItem('creds')) &&chooseBunnyToEdit(bunnyData)
                                }} />
                            
                            <MdDeleteOutline
                            as='button' className='button cardBtn' onClick={() => checkAuth(localStorage.getItem('creds')) && window.confirm(`You are about to delete ${bunnyName}. Are you sure?`) && deleteBunny(objectId)}/>
                        </div>
                    }           
                </div>
				<a href={linkTo}>
					<img src={imageLink} alt={`no pics to show of ${bunnyName}`} className='bunImage'/>
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
				</a>
				<button 
					className='switchViewBtn button' 	type='button' 
					onClick={() => {
						setViewText(!viewText)
						}}
				>
					{ viewText ? 'hide info' : 'more info' }
				</button>
            </div>
        </CardStyles>
    )
}

const CardStyles = styled.div`
    height: fit-content;
	margin: 15px 15px;
	
	.card {
		width: 400px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: var(--50);
        justify-content: space-between;
		align-items: center;
		position: relative;

		.bunImage {
			width: 100%;
			margin: 0px auto;
			align-content: center;
			color: #a1a1a1;
			border: 2px solid green;
		
			left: 0;
			right: 0;
			top: 8rem;
			display: ${props => (props.viewText ? 'none' : 'initial')};
		}
    }
    .cardHeader {
		width: 100%;
        margin: 0px auto; 
        padding: 1rem;
        justify-content: space-between;
		align-content: center;
        h2 {
			width: 60%;
            font-size: 25px;
			word-wrap: wrap;
        }
        .buttonContainer {
		   align-self: flex-start;
		   max-width: 35%;
		   flex-wrap: no wrap;
        }
    }

    .cardText {
        padding: 1rem;
		top: 8rem;
		text-decoration: none;
		color: black;
		display: ${props => (props.viewText ? 'initial' : 'none')}
    }

    .cardBtn {
        width: 3rem;
        height: 3rem;
        padding: 1rem;
        border: none;
        border-radius: 50%;
        background-color:var(--300);
        color: black;
        align-content: center;
        cursor: pointer;
        :hover {
            color: cornflowerblue;
        }
    }

	.switchViewBtn {
		background-color: none;
		border: none;
		box-shadow: none;
		padding: 1rem;
		width: 90%;
		margin: 1rem;
	}

	@media screen and (max-width: 500px) {
		.card {
			width: 90%;
			justify-content: center;
		}



	}


`
export default BunnyCard