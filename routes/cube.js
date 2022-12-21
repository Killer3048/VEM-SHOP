const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('cube', {
        title: 'CUBE',
        isCube: true
    })
})


module.exports = router