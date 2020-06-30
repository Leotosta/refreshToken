function sendRefreshToken(Response, token){
    return Response.cookie('jid', token, {
        httpOnly: true,
        cookie: 860000
    })
}


module.exports = { sendRefreshToken }