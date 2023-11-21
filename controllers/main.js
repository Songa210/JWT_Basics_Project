// check username, password in post(login) request
// if exit create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username,password} = req.body

    // mongoose validation
    // Joi
    // check in the controller

    if(!username || !password){
     throw new CustomAPIError('Please provide email and password', 400)
    }

    // just for demo, normally provided by DB!!!
    const id = new Data().getData()



    // try to keep payload small, better experience for user
    const token = jwt.sign({id, username})
        
    
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Songa Pro`, secret:`Here is your authorized data, 
    your lucky number is ${luckyNumber}`})
}
module.exports = {
    login,
    dashboard
}