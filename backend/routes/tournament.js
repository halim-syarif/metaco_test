const routes = require('express').Router()
const TournamentController = require('../controllers/tournaments')

routes.get('/', TournamentController.getAll)
routes.post('/:position', TournamentController.postResult)
routes.put('/:position', TournamentController.updateResult)
routes.delete('/:tournament_id/:position', TournamentController.deleteResult)

module.exports = routes