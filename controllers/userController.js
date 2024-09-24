const { makeInvoker } = require('awilix-express');

const UserController = ({ userService }) => ({
  getUserById: async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  },

  createUser: async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  }
});

module.exports = makeInvoker(UserController);
