class UserRepository {
    constructor() {
      // Có thể inject kết nối DB nếu cần
    }
  
    async findById(id) {
      // Thực hiện truy vấn database để lấy user theo id
      return { id, name: 'John Doe' }; // Ví dụ giả
    }
  
    async create(data) {
      // Thực hiện tạo user mới trong database
      return { id: 1, ...data };
    }
  }
  
  module.exports = UserRepository;