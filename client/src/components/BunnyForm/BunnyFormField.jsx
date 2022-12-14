import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/appContext.js'

const FormFieldText = () => {
    const { handleTextInput, bunnyToEdit } = useAppContext();
    const { bunnyName, description, temperament, age, variation, imageLink, linkTo } = bunnyToEdit;
    
    return (
      <TextFieldStyles>
        <div className='column formField'>
            <label htmlFor='bunnyName'>
                name:
            </label>
                <input 
                    className='textInput' 
                    type='text' 
                    name='bunnyName' 
                    placeholder="Add Bunny's Name" 
                    onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                    defaultValue= {bunnyName}
                />
            <div className='row helperText'>
                <p>*required</p>
            </div>
        </div>
        <div className='column formField'>
            <label htmlFor='description'>
                description:
            </label>
            <textarea 
                rows='8' 
                className='textInput' 
                name='description' 
                placeholder="Add Description Of Bunny" 
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={description} 
            />
            <div className=' row helperText'>
            </div>
        </div>
        <div className='column formField'>
            <label htmlFor='temperament'>
                temperament:
            </label>
            <input 
                className='textInput'
                type='text'
                name='temperament'
                placeholder="Add Bunny's Temperament"
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={temperament}
            />
        </div>
        <div className='column formField'>
            <label htmlFor='age'>
                age:
            </label>
            <input 
                className='textInput'
                type='text'
                name='age'
                placeholder="Add Bunny's age"
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={age}
            />
        </div>
        <div className='column formField'>
            <label htmlFor='variation'>
                variation:
            </label>
            <input 
                className='textInput'
                type='text'
                name='variation'
                placeholder="Add Bunny's Variations (if any)"
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={variation}
            />
        </div>
        <div className='column formField'>
            <label htmlFor='imgLink'>
                Link To Image Of Bunny (must be public domain):
            </label>
            <input 
                className='textInput'
                type='text'
                name='imageLink'
                placeholder="Link To Image Of Bunny"
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={imageLink}
            />
        </div>
		<div className='column formField'>
            <label htmlFor='imgLink'>
                URL to redirect to when potential adopter clicks bunny image:
            </label>
            <input 
                className='textInput'
                type='text'
                name='linkTo'
                placeholder="URL to redirect to on image click"
                onChange={(e) => { handleTextInput({e:e, formName:'bunny'}) }} 
                defaultValue={linkTo ? linkTo : ''}
            />
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