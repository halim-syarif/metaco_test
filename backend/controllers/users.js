const { User } = require("../models");
const { Op } = require("sequelize");

class UserController {
  static async getAll(req, res, next) {
    try {
      const { limit, offset, name } = req.query
      
      const option = {
        order: [
          ['coin', 'DESC']
        ],
        where: name ? { name: { [Op.like]: `%${name}%` }} : null,
        limit,
        offset,
      }
      
      const users = await User.findAndCountAll(option)
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
