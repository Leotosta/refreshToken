const express = require('express')
const User = require('../config/schema')
const bcrypt = require('bcryptjs')
const { generateToken, createRefreshToken } = require('../auth')
const {sendRefreshToken} = require('../sendRefreshToken')

const router = express.Router()

router.get('/', async (req, res) => {
    
    const users = await User.find()
    return res.json(users)
})

router.post('/SignUp', async (req, res) => {
    const { username, password, email, confirmPass } = req.body

    try{
        const user = await User.findOne({$or: [{username}, {email}] })
    
        if(user)
            return res.status(404).json('Already Exists')
    
        if(confirmPass !== password)
            return res.status(404).json('Passwords are different!')
        
        const createEntry = new User({ username, email, password })
        const newUser = await createEntry.save()
    
        newUser.password = undefined
    
        return res.json(newUser)
    }catch(e){
        console.log(e)
        return res.status(404).json(e)
    }
})

router.post('/SignIn', async (req, res) => {
    const {username, password} = req.body

    try{
        const user = await User.findOne({username}).select('+password')

        if(!user)
            return res.status(404).json('Username or Password does not existss!')
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(404).json('Username or Password does not exists!')
        
        user.password = undefined

       sendRefreshToken(res, createRefreshToken({id: user._id}))

    //    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //    headers.append('Access-Control-Allow-Credentials', 'true');

        return res.json({
            user,
            token: generateToken({ id: user._id })
        })
    }catch(e){
        console.log(e)
        return res.status(404).json(e)
    }
})


module.exports = app => app.use('/', router)