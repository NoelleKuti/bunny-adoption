import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext.js'
import TextField from './TextField'

const AppForm = () => {
  return (
    <form>
      <h1> Application Form </h1>
	  <Link to='/'>Home</Link>
      <div className='group' id='aboutYou'>
        <TextField
          fieldName='familyNamesAges'
          label='Household Members'
          helperText='Please list the names and ages of everyone in your household'
          placeHolder='Household Members'
        />
        <TextField
          fieldName='address'
          label='Your Address:'
          helperText=''
          placeHolder='address'
        />
        <TextField
          fieldName='email'
          label='Your Email:'
          helperText=''
        />
        <div className='group' id='vetInfo'>
          <TextField
            fieldName='vetInfo name'
            label='Name'
            helperText=''
            placeHolder='Name Of Vet'
          />
          <TextField
            fieldName='vetInfo phone'
            label='Phone Number'
            helperText=''
            placeHolder='Phone Number Of Vet'
          />
          <TextField
            fieldName='vetInfo address'
            label='Address'
            helperText=''
            placeHolder='Address Of Vet'
          />
        </div>
      <TextField
        fieldName='petsInfo'
        label='Household Pets'
        helperText='Please list current pets in household (species, age, spayed/neutered)'
        placeHolder='Household Pets'
      />
    </div>
  </form>
  )
}

export default AppForm