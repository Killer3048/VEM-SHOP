module.exports = function(req, res, next) {

    res.locals.editAdmin = req.session.user.admin;
    next()

}