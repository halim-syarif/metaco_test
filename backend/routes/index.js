const routes = require('express').Router()
const errorHandler = require('../middlewares/errorhandler')
const userRoutes = require('./users')
const tournamentRoutes = require('./tournament')

routes.use('/users', userRoutes)
routes.use('/tournament', tournamentRoutes)


routes.use(errorHandler)



module.exports = routes