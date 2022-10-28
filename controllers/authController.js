import mongoose from 'mongoose'
import AuthorizedUser from '../models/AuthorizedUser.js'

const loginUser = async (req, res) => {
    const credentials = await AuthorizedUser.find({_id: '632a3b39d624da010cc003f3'}); 
  
    
    if (req.body.userName === credentials[0].userName && req.body.password === credentials[0].password) {
        await res.send({success: true, message: 'login successful, access granted', key: '632a3b39d624da010cc003f3'});
    } else {
        await res.send({success: false, message: 'Username or password are incorrect. Please try again.', key: ''});
    } 
}

const getKey = async (req, res) => {
    await res.send({key: '632a3b39d624da010cc003f3'});
}



export { loginUser, getKey }