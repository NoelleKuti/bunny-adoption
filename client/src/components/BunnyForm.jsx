import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import BunnyFormHeaders from './BunnyFormHeaders.jsx'
import BunnyFormField from './BunnyFormField'


const BunnyForm = () => {
    const { formType, form, addBunny, editBunny, bunnyToEdit } = useAppContext();

	const handleSubmit = (e) => {
		const formData = { ...form }
		e.preventDefault();
        
		if (formType === 'add') {
        	addBunny(formData);
		} else if (formType === 'edit') {
			editBunny(bunnyToEdit._id, formData);
		} else {
			console.log(`there was an error with ${formType}`)
		}
	}
	return (
		<FormStyles>
			<form className='column bunnyForm' onSubmit={(e) => { handleSubmit(e) }}>
				<BunnyFormHeaders/>
				<BunnyFormField />
				<button type='submit' className='submitButton'>SUBMIT</button>
			</form> 

		</FormStyles>
  )
}

const FormStyles = styled.div`
	margin: 0px auto;
	width: 100%;

	.bunnyForm {
		width: 80%;
		max-width: 600px;
		margin: 4rem auto;
		border-radius: 50px;
		background-color: white;
	}

	.formField {
		width: 80%;
		max-width: 500px;
		padding: 1.5rem;
		background-color: var(--50);
		margin: 10px auto;

		label, h3 {
			width: 100%;
			display: flex;
			align-items: flex-start;
			font-size: 15px;
			padding: 10px;
			font-weight: 600;
            margin-bottom: 2rem;
		}
        .subLabel {
            margin-bottom: 0;
        }
	}

	.submitButton {
		margin: 2rem auto 2rem auto;
	}
`

export default BunnyForm