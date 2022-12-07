const { Router } = require('express')
const router = Router()
const Info = require('../models/info')


router.get('/', (req, res) => {
    res.render('cube', {
        title: 'CUBE',
        isCube: true
    })
})


module.exports = router