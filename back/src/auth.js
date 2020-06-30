const jwt = require('jsonwebtoken')

function createRefreshToken(user){
    return  jwt.sign(user, process.env.SECREAT1, {
        expiresIn: '10m'
    })
}

function generateToken(user){
    return jwt.sign(user, process.env.SECREAT, {
        expiresIn: '10s'
    })
}
module.exports = { generateToken,createRefreshToken}