const { Schema, model } = require('mongoose')


const myUser = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    admin: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false
})

module.exports = model('User', myUser)