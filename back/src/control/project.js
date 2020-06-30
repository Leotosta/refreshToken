const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../config/schema')

const authMiddleware = require('../middlewares/middleware')
const { generateToken, createRefreshToken } = require('../auth')
const {sendRefreshToken} = require('../sendRefreshToken')

const router = express.Router()

// router.use(authMiddleware)

async function revokeToken(user){
    await User.findByIdAndUpdate(user._id, {$inc: {tokenVersion: 1 }})
    console.log(user.tokenVersion)

}

router.get('/refreshToken/project',authMiddleware, async (req, res) => {
    
    

    return res.json({
        userId: req.userId
    })
})

router.post('/refreshToken', async (req, res) => {
    const token = req.cookies.jid

    if(!token)
        return res.json({ok: 'token invalid', accessToken: ''})
    
    let payload = null   
    try {
        payload = jwt.verify(token, process.env.SECREAT1)
    }catch(e){
        console.log(e)
        return res.json({ ok: 'erro', accessToken: '' })
    }

    const user = await User.findOne({ id: payload._id })


    console.log(user)

    if(!user)
        return res.json({ok: 'user not found', accessToken: ''})

    // if(user.tokenVersion !== payload.tokenVersion)
    //     return res.json({ ok: 'not equal', accessToken: '' })

    
    sendRefreshToken(res, createRefreshToken({id: user._id}))


    return res.json({ ok: true, acessToken: generateToken({id: user._id})})
})

module.exports = app => app.use('/', router)