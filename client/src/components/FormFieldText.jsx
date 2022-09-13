import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const FormFieldText = () => {
    const { handleTextInput, form } = useAppContext();
    const { bunnyName, description } = form;
    
    return (
      <TextFieldStyles>
        <div className='column formField'>
            <label htmlFor='bunnyName'>
                name:
            </label>
                <input className='textInput' type='text' name='bunnyName' placeholder="Add Bunny's Name" onChange={(e) => { handleTextInput(e) }} defaultValue={bunnyName} />
            <div className='row helperText'>
                <p>*required</p>
            </div>
        </div>
        <div className='column formField'>
            <label htmlFor='description'>
                description::
            </label>
                <textarea rows='8' className='textInput' name='description' placeholder="Add Description Of Bunny" onChange={(e) => { handleTextInput(e) }} defaultValue={description !== undefined && description} />
            <div className=' row helperText'>
            </div>
        </div>
    </TextFieldStyles>
  )
}

const TextFieldStyles = styled.div`
    .textInput {
			border: 2px solid var(--500);
			font-size: 18px;
			padding: .5rem;
			border-radius: 15px;
		}
		
		.helperText {
			font-size: 13px;
			color: grey;
			width: 80%;
			align-self: flex-start;
			padding: 0px;
			justify-content: space-between;
			font-weight: 500;
			.success {
				color: green;
			}
			.danger {
				color: red;
			}
		}
`
export default FormFieldText