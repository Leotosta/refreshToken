const jwt = require('jsonwebtoken')

function createRefreshToken(user){
    return  jwt.sign(user, process.env.SECREAT1, {
        expiresIn: '15m'
    })
}

function generateToken(user){
    return jwt.sign(user, process.env.SECREAT, {
        expiresIn: '15m'
    })
}
module.exports = { generateToken,createRefreshToken}