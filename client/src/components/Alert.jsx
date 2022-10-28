import React from 'react'
import { useAppContext } from '../context/appContext.js'


const Alert = () => {
  const {alertType, alertText} = useAppContext()


  return (
    <div className={`alert ${alertType}`}>
        <p>{alertText}</p>
    </div>
  )
}

export default Alert