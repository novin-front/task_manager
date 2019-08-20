const generalRouter = require('./web');
const tasksRouter = require('./tasks');
const authRouter = require('./auth');
const userRouter = require('./user')
const categoryRouter = require('./category');
const {
    forbidden
} = require('../boot/403');
module.exports = (app) => {
    app.use('/', generalRouter);
    app.use('/tasks', [forbidden], tasksRouter);
    app.use('/auth', authRouter);
    app.use('/user', [forbidden], userRouter)
    app.use('/category', [forbidden], categoryRouter)
}