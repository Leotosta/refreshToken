const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/fifinha' , {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.promise = global.promise

module.exports = mongoose