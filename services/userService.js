class UserService {
    constructor({ userRepository }) {
      this.userRepository = userRepository;
    }
  
    async getUserById(id) {
      return this.userRepository.findById(id);
    }
  
    async createUser(data) {
      return this.userRepository.create(data);
    }
  }
  
  module.exports = UserService;
  