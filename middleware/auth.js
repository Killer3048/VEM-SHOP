module.exports = function(req, res, next) {
    if (!req.session.isAuthenticated) {
        return res.status(408).render('408', {
            title: 'Отказ в доступе',
            accessError: `Для доступа к странице | действию, вы должны авторизироваться`
        })
    }

    next()
}