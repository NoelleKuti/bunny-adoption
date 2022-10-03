import React from 'react'

const TextField = (props) => {
  const {type, fieldName, helperText, placeHolder, label} = props;

  
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
			cols='10' rows='10'
		/>
	}
		
	</div>
  )
}

export default TextField