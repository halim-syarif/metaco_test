const routes = require('express').Router()
const UserController = require('../controllers/users')

routes.get('/', UserController.getAll)

module.exports = routes