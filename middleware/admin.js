module.exports = function(req, res, next) {

    if (req.session.user.admin === 0) {
        return res.status(404).render('404', {
            title: 'На той странице тебе были не рады',
            nonAdmin: `Админка не для тебя. Сейчас настучу по попе`,
            adminError404: `Admin error`
        })
    }

    next()
}