const { Router } = require('express')
const router = Router()
const User = require('../models/user')
const admin = require('../middleware/admin')

router.get('/', admin, async(req, res) => {
    const users = await User.find().lean()

    res.render('admin', {
        title: 'Админ-панель',
        isProduct: true,
        users: users
    })
})

router.get('/:id/edit', admin, async(req, res) => {
    const editsUser = await User.findById(req.params.id).lean()

    res.render('admin-edit', {
        title: `Редактировать "${editsUser.email}"`,
        editsUser
    })
})

router.post('/edit', admin, async(req, res) => {
    const { id } = req.body //снятие ID со скрытого поля в форме
    delete req.body.id //удаление второго ID, который на странице 

    await User.findByIdAndUpdate(id, req.body).lean() //подождать пока поля обновятся
    res.redirect('/admin') //редирект
})

router.post('/remove', admin, async(req, res) => {

    await User.deleteOne({
        _id: req.body.id
    })
    res.redirect('/admin')
})

module.exports = router