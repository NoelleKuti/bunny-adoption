import React from 'react'
import { useAppContext } from '../../context/appContext';

const TextField = (props) => {
 	const { type, fieldName, helperText, placeHolder, label, groups } = props;
	const { handleTextInput } = useAppContext();
  

    return (
    <div className='formField column'>
		<div className='fieldHeaders'>
			<h3 className='fieldLabel'>
				{ label }
			</h3>
			<p className='fieldHelperText'>
				{ helperText }
			</p>
		</div>
		
	{
		type === 'text' &&
			<input 
				className='textInput'
				type='textarea'
				name={fieldName}
				helpertext={helperText}
				placeholder={placeHolder}
				onChange={(e) => handleTextInput({e: e, formName: 'adoptForm', groups: groups})}
			/>
	}
	{
		type === 'textArea' &&
			<textarea 
			className='textAreaInput'
			type='textarea'
			name={fieldName}
			helpertext={helperText}
			placeholder={placeHolder}
			onChange={(e) => handleTextInput({e: e, formName: 'adoptForm', groups: groups})}
			cols='10' rows='10'
		/>
	}
		
	</div>
  )
}

export default TextField