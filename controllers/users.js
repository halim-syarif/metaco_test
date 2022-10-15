const { User } = require("../models");

class UserController {
  static async getAll(req, res, next) {
    try {
      const users = await User.findAll()
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
