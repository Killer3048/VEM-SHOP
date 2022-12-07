const { Router } = require('express')
const router = Router()
const Info = require('../models/info')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')

router.get('/', async(req, res) => {
    const infos = await Info.find().lean()

    res.render('product', {
        title: 'Товары',
        isProduct: true,
        model: infos
    })
})

router.get('/:id', async(req, res) => {
    const products = await Info.findById(req.params.id).lean()

    res.render('products', {
        title: 'Редактирование',
        product: products
    })
})

router.get('/:id/edit', auth, admin, async(req, res) => {
    const edits = await Info.findById(req.params.id).lean()

    res.render('product-edit', {
        title: `Редактировать "${edits.info}"`,
        edits
    })
})

router.post('/edit', auth, admin, async(req, res) => {
    const { id } = req.body //снятие ID со скрытого поля в форме
    delete req.body.id //удаление второго ID, который на странице 

    await Info.findByIdAndUpdate(id, req.body).lean() //подождать пока поля обновятся
    res.redirect('/product') //редирект
})

router.post('/remove', auth, admin, async(req, res) => {

    await Info.deleteOne({
        _id: req.body.id
    })
    res.redirect('/product')
})


module.exports = router