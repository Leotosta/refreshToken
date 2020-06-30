 let accessTok = []

function setToken(token){
    return accessTok.push(token)
}

function getToken(){
    return accessTok[0]
}

export { setToken, getToken }