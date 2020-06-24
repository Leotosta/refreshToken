const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO , {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.promise = global.promise

module.exports = mongoose