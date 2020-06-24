const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

app.use(cookieParser())
app.use(morgan('common'))
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin : process.env.CORS, 
    credentials: true
     
}))

require('./control/index')(app)

const port = 4000 || process.env.PORT
app.listen(port, () => {
    console.log(`Magic happening on port ${port}`)
})