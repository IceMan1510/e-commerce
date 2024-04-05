const bcrypt = require('bcrypt');
const UserModel = require("../Models/users");

class UserService {
  async loginUser(params) {
    try {
      const user = await UserModel.findOne({ username: params.username });
      console.log(user);
      const match = bcrypt.compareSync(params.password, user.password);
      if (match) {
        return {
          username : params.username,
          token : 'assssssssssssssssssssssssssssss'
        };
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async createUser(params) {
    
  }
}

module.exports = UserService;