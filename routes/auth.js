const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs') //шифрование пароля
const User = require('../models/user')
const bytesToUuid = require('uuid/lib/bytesToUuid')


router.get('/', async(req, res) => {
    res.render('auth/login', {
        title: 'Авторизация',
        isLogin: true,
    })
})

router.get('/logout', async(req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

router.post('/login', async(req, res) => {
    try {
        const { email, pass } = req.body
        const candidate = await User.findOne({ email }) //выбираем пользователя с определенным емэйл

        if (candidate) { //если кондидат существует, то 
            const areSame = pass === candidate.pass //проверяем пароли на совпадение, сравнивая уже с зашифрованным паролем

            if (areSame) { //если areSame равно паролю юзера, то переходим на страницу доступа ко всему контенту
                req.session.user = candidate
                req.session.isAuthenticated = true
                req.session.save(err => { //ждем сначала, чтобы прогрузилась сессия и все созранилось, и после этого уже редиректаем
                    if (err) {
                        throw error
                    }
                    res.redirect('/')
                    console.log('Ты авторизировался')
                })

            } else {
                res.render('auth/login', {
                    title: 'Вы ввели не верный пароль',
                    PassWrong: 'Вы ввели не верный пароль',
                })
            }

        } else { //если нет, то редирект на главную страницу
            res.render('auth/login', {
                LoginError: 'Пользователь с таким e-mail не зарегистрирован',
                title: 'Неправильный e-mail'
            })

        }

    } catch (e) {
        console.log(``)
    }
})

router.post('/register', async(req, res) => {

    try {
        const { email, name, pass, confirm } = req.body; //
        const user = await User.findOne({ email }); //user содержит 3 поля id, mail, pass
        if (user) {
            res.render('auth/login', { RegError: 'Такой пользователь уже зареган', title: 'Такой пользователь уже есть' })
        } else if (pass == confirm) {
            const myUser = new User({
                email,
                name,
                pass
            })
            await myUser.save();
            res.render('auth/login', { Complete: 'Вы создали аккаунт. Теперь авторизуйтесь!', title: 'Ура. Аккаунт создан' })
        } else {
            res.render('auth/login', { passError: 'Пароли не совпали', title: 'Пароли не совпали' })
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = router