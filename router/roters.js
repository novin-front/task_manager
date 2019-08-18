const generalRouter = require('./web');
const tasksRouter = require('./tasks');
const authRouter = require('./auth');
const userRouter = require('./user')
const categoryRouter = require('./category');
module.exports = (app) => {
    app.use('/', generalRouter);
    app.use('/tasks', tasksRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter)
    app.use('/category', categoryRouter)
}