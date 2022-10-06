import React from 'react'
import { useAppContext } from '../../context/appContext';

const BoolField = (props) => {
  const { fieldName, helperText, label, groups } = props;
  const { handleTextInput } = useAppContext();
	
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
					onChange={(e) => handleTextInput({e: e, formName:'adoptForm', groups: groups})}
				/>
			</div>
			<div className='row'>
				<p>No</p>
				<input 
					name={fieldName} 
					value={false}
					type='radio'
					defaultChecked={true}
					onChange={(e) => handleTextInput({e: e, formName:'adoptForm', groups: groups})}
				/>
			</div>
		</div>
	</div>
  )
}

export default BoolField