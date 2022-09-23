import React from 'react'

const TextField = (props) => {
  const {fieldName, helperText, placeHolder} = props;
  
    return (
    <input 
        type='textarea'
        name={fieldName}
        helperText={helperText}
        placeholder={placeHolder}
        cols='50' rows='50'
    />
  )
}

export default TextField