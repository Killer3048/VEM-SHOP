const { Router } = require('express')
const router = Router()
const Info = require('../models/info')
const auth = require('../middleware/auth')

router.get('/', auth, (req, res) => {
    res.render('game', {
        title: 'GAME "BALL"',
        isGame: true
    })
})


module.exports = router