const { Schema, model } = require('mongoose')

const myInfo = new Schema({ //схема служтит для описания таблиц в бд
    info: {
        type: String
    },
    price: {
        type: String
    },
    img: { type: String }
}, { versionKey: false })



module.exports = model('Info', myInfo) //model - функция которая будет засовывать данные в бд  
    // Info - название таблицы //myInfo чем заполнена таблица