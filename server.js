const express = require('express');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);


const app = express();
const store = new MongoStore({
    collection: 'mySes',
    uri: config.get('uri')
});

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'darova',
    extname: 'hbs',
});

const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const productRouter = require('./routes/product');
const cubeRouter = require('./routes/cube');
const authRouter = require('./routes/auth');
const gameRouter = require('./routes/game-route');
const cardRouter = require('./routes/card');
const adminRouter = require('./routes/admin')

const errorMiddleware = require('./middleware/error');
const varMiddleware = require('./middleware/variables');

const PORT = config.get('port');




app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');



app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.use(session({
    secret: config.get('SESSION_SECRET'),
    resave: false, //пересозданение сессии
    saveUninitialized: false, //сэйв инфы для созранения того кто зашел(без данных)
    store
}));

app.use(varMiddleware);

app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/product', productRouter);
app.use('/cube', cubeRouter);
app.use('/auth', authRouter);
app.use('/game', gameRouter);
app.use('/card', cardRouter);
app.use('/admin', adminRouter)


app.use(errorMiddleware);

async function connectTo() {
    try {
        await mongoose.connect(config.get('uri'), { //сначала подождать подключения к бд

        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
        /*создали асинхронную функцию, для более корректной работы с Промисами
        //в монгусе, после чего добавили консоль лог, чтобы знать, что сервер уже будет запущен, после подключения к бд */
    } catch (e) {
        console.log(e);
    }
}

connectTo();