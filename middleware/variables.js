//промежуточное ПО

module.exports = function(req, res, next) { //экспортируем функцию.
    res.locals.isAuth = req.session.isAuthenticated; //присуждаем isAuth значение isAuthenticated (\locals проверка состояния странцы, на которой ты находишься/)
    //is auth хранит состояние is Authenticated 
    next(); //переход на след. запрос
}