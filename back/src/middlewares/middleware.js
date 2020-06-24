const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const allValue = req.headers.authorization
    console.log(req.headers)
    console.log(allValue + ' authMiddleware!')


    if(!allValue)
        return res.status(404).json('Nothing has been found')

    const parts = allValue.split(' ')
    
    if(parts.length !== 2) 
        return res.status(404).json('Token is invalid!')

    const [scheme, token] = parts

    if(!/Bearer$/i.test(scheme))
        return res.status(404).json('Misunderstood')

    jwt.verify(token, process.env.SECREAT, (err, decoded) => {
        if(err)
            return res.status(404).json(err)
        
        req.userId = decoded.id
        return next()
            
    } )
    

}