const { Schema, model } = require('mongoose')


const myContact = new Schema({
    contactName: {
        type: String
    },
    contactTel: {
        type: String
    },
    contactEmail: {
        type: String
    }
}, {
    versionKey: false
})



module.exports = model('Contact-form', myContact)