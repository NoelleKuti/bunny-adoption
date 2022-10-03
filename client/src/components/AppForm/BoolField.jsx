import React from 'react'

const BoolField = (props) => {
  const { fieldName, helperText, label } = props;
	
	return (
	<div className='column formField'>
		<h3 className='fieldLabel'>
			{ label }
		</h3>
		<p className='fieldHelperText'>
			{helperText}
		</p>
		<div className='row'>
			<div className='row'>
				<p>Yes</p>
				<input 
					name={fieldName} 
					value={true}
					type='radio'
				/>
			</div>
			<div className='row'>
				<p>No</p>
				<input 
					name={fieldName} 
					value={true}
					type='radio'
				/>
			</div>
		</div>
	</div>
  )
}

export default BoolField