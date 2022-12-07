const { Router } = require('express')
const router = Router()
const Info = require('../models/info')
const admin = require('../middleware/admin')

router.get('/', admin, (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        isAdd: true
    })
})


router.post('/adds', admin, async(req, res) => {
    const infos = new Info({
        info: req.body.info,
        price: req.body.price,
        img: req.body.img
    })

    await infos.save()
    res.redirect('/product')
})


module.exports = router