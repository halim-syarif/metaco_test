const routes = require('express').Router()
const errorHandler = require('../middlewares/errorhandler')
const userRoutes = require('./users')

routes.use('/users', userRoutes)


routes.use(errorHandler)



module.exports = routes