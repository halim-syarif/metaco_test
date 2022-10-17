const { Tournament, Tournament_result, Team, Team_member, User, Sequelize } = require("../models");
const calculateReward = require("../helpers/calculateReward");
const checkHaveBeenWinner = require("../helpers/checkHaveBeenWinner");
const checkIsCorrectLastWinnerTeamId = require("../helpers/checkIsCorrectLastWinnerTeamId");
const checkIsCorrectTeam = require("../helpers/checkIsCorrectTeam");

class TournamentController {
  static async getAll(req, res, next) {
    try {
      let { limit, offset } = req.query

      if (!limit) limit = 5
      if (!offset) offset = 0

      const option = {
        include: [{
          model: Tournament_result,
          include: {
            model: Team,
            attributes: ["id", "name"]
          }
        }, {
          model: Team,
          attributes: ["id", "name", "logo"],
          include: {
            model: Team_member,
            attributes: ["id", "roles", "ingame_id"],
            include: {
              model: User,
              attributes: ["id", "name"]
            }
          }
        }],
        order: [["id", "ASC"]],
        limit,
        offset,
      }

      const data = await Tournament.findAndCountAll(option)
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postResult(req, res, next) {
    try {
      const { tournament_id, team_id } = req.body
      const { position } = req.params

      if (isNaN(Number(position)) || position > 3 || position < 1) throw { name: "wrongparams" }
      if (!tournament_id || !team_id) throw { name: "incompleteData" }

      const tournament = await Tournament.findByPk(tournament_id, {
        include: [Team, Tournament_result]
      })

      if (!tournament) throw { name: "NotFound" }

      if (checkHaveBeenWinner(tournament, team_id)) throw { name: "HaveBeenWinner"}
      if (!checkIsCorrectTeam(tournament, team_id)) throw { name: "WrongTeam" }

      //create tournament result
      await Tournament_result.create({
        team_id,
        tournament_id,
        position,
        point: calculateReward(position)
      })

      //update coin users
      User.findAll({
        where: {
          '$Team_members.team_id$': team_id
        },
        include: {
          attributes: [],
          model: Team_member
        }
      }).then(teamUser => {
        for (let i = 0; i < teamUser.length; i++) {
          const user = teamUser[i];
          user.coin += calculateReward(position)
          user.save()
        }
      })

      res.status(200).json({ status: "success save data" });
    } catch (err) {
      next(err);
    }
  }

  static async updateResult(req, res, next) {
    try {
      const { tournament_id, team_id, lastWinnerTeam_id } = req.body
      const { position } = req.params

      if (isNaN(Number(position)) || position > 3 || position < 1) throw { name: "wrongparams" }
      if (!tournament_id || !team_id || !lastWinnerTeam_id) throw { name: "incompleteDataEdit" }

      const tournament = await Tournament.findByPk(tournament_id, {
        include: [Team, Tournament_result]
      })

      if (!tournament) throw { name: "NotFound" }

      if (checkHaveBeenWinner(tournament, team_id)) throw { name: "HaveBeenWinner"}
      if (!checkIsCorrectTeam(tournament, team_id)) throw { name: "WrongTeam" }
      if (!checkIsCorrectLastWinnerTeamId(tournament, lastWinnerTeam_id)) throw { name: "WrongLastTeamId" }

      if (lastWinnerTeam_id !== team_id) {
        //update tournament result
        await Tournament_result.update({
          team_id,
        },{
          where: {
            position,
            tournament_id,
          }
        })

        //minus previous coin users winner
        User.findAll({
          where: {
            '$Team_members.team_id$': lastWinnerTeam_id
          },
          include: {
            attributes: [],
            model: Team_member
          }
        }).then(teamUser => {
          for (let i = 0; i < teamUser.length; i++) {
            const user = teamUser[i];
            user.coin -= calculateReward(position)
            user.save()
          }
        })

        //update coin users
        User.findAll({
          where: {
            '$Team_members.team_id$': team_id
          },
          include: {
            attributes: [],
            model: Team_member
          }
        }).then(teamUser => {
          for (let i = 0; i < teamUser.length; i++) {
            const user = teamUser[i];
            user.coin += calculateReward(position)
            user.save()
          }
        })

        res.status(200).json({ status: "success update data" });
      } else {
        res.status(200).json({ status: "Data not Edited" });
      }


    } catch (err) {
      next(err);
    }
  }

  static async deleteResult(req, res, next) {
    try {
      const { tournament_id, position } = req.params

      if (isNaN(Number(position)) || position > 3 || position < 1) throw { name: "wrongparams" }
      if (!tournament_id) throw { name: "wrongparams" }

      const foundTournamentResult = await Tournament_result.findOne({
        where: {
          tournament_id
        }
      })

      if (!foundTournamentResult) throw { name: "NotFound" }

      await Tournament_result.destroy({
        where: {
          tournament_id,
          position
        }
      })

      //update coin users
      User.findAll({
        where: {
          '$Team_members.team_id$': foundTournamentResult.team_id
        },
        include: {
          attributes: [],
          model: Team_member
        }
      }).then(teamUser => {
        for (let i = 0; i < teamUser.length; i++) {
          const user = teamUser[i];
          user.coin -= calculateReward(position)
          user.save()
        }
      })

      res.status(200).json({ status: "success delete data" });
    } catch (err) {
      next(err);
    }
  }

  static async getLeaderBoard(req, res, next){
    try {
      const option = {
        attributes: ["id", "name", "captain_id", "logo", [Sequelize.fn("SUM", Sequelize.col("Tournament_results.point")), "total_point"]],
        include: [{
          attributes: ["id", "position", "point", "tournament_id"],
          model: Tournament_result,
        },{
          attributes: ["id", "email", "name", "coin"],
          model: User
        }],
        order: [["total_point", "DESC"]],
        group: ["Tournament_results.id", "Team.id", "User.id" ]
      }

      const data = await Team.findAll(option)
      res.status(200).json(data);
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TournamentController;
