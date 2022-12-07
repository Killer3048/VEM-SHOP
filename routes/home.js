const { Router } = require('express')
const Contact = require('../models/contact')
const router = Router()

router.get('/', (req, res) => {
    res.render('home', {
        title: 'VEM SHOP',
        isHome: true
    })
})

router.post('/contact-form', async(req, res) => {
    const contact = new Contact({
        contactName: req.body.contactName,
        contactTel: req.body.contactTel,
        contactEmail: req.body.contactEmail
    })

    await contact.save()
    res.render('home', {
        title: 'Спасибо, что связались',
        contactFormSubmit: 'Спасибо, что связались с нами. Ответим вам на почту, максимум через 24 часа'
    })
})

module.exports = router