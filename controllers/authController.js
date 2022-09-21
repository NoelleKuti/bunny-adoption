import mongoose from 'mongoose'
import AuthorizedUser from '../models/AuthorizedUser.js'

const loginUser = async (req, res) => {
    const credentials = await AuthorizedUser.find({_id: '632a3b39d624da010cc003f3'}); 
  
    
    if (req.body.userName === credentials[0].userName && req.body.password === credentials[0].password) {
        await res.send('login successful, access granted');
    } else {
        await res.send('login UNSUCCESSFUL, access DENIED');
    }
    
}

export { loginUser }