const { Router } = require('express')
const Info = require('../models/info')
const auth = require('../middleware/auth')
const router = Router()



router.post('/add', auth, async(req, res) => {
    const product = await Info.findById(req.body.id)
    await req.user.addToCart(product)
    res.redirect('/product')
})

module.exports = router