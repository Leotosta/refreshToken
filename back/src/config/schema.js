const mongoose = require('./db')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    
    username: {
        type: String,
        minLength: [6, 'Username must be more than 6 caracters!'],
        createIndex: true,
        require: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        createIndex: true,
        trim: true
    },

    password: {
        type: String,
        select: false,
        minLength: [6, 'Password must have more than 6 caracters!'],
        require: true
    },

    tokenVersion: {
        type: Number,
        default: 0
    },

    match: {
        type: Number,
        default: 0
    },

    victories: {
        type: Number,
        default: 0
    },

    drawn: {
        type: Number,
        default: 0
    },

    default: {
        type: Number,
        default: 0
    },

    //active: false, resetPasswordExpires, 
    
}, {
    timestamps: true
})

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User