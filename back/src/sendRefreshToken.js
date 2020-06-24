function sendRefreshToken(Response, token){
    return Response.cookie('jid', token, {
        httpOnly: true,
        maxAge: 800000
    })
}
 
module.exports = { sendRefreshToken }