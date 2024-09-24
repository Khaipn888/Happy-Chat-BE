const { createContainer, asClass, asFunction, asValue } = require('awilix');
const userService = require('../services/userService');
const userRepository = require('../repositories/userRepository');

// Tạo container và đăng ký các dependencies
const container = createContainer();

container.register({
  userService: asClass(userService).scoped(),  // Scoped cho mỗi request
  userRepository: asClass(userRepository).scoped(),
});

module.exports = container;