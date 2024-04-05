const UserService = require("../Services/users");

const userService = new UserService();
class UserController {
  async login(req, res) {
    try {
      const loginParam = {
        username: req.body.username,
        password: req.body.password
      };

      const result = await userService.loginUser(loginParam);

      if (result) {
        const response = {
          message: "Login Successful",
          data: result
        };
        res.status(200).json(response);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error);
    }
  }

  async saveUser(req,res) {
    try {
      const options = {
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, 
        contact_number: req.body.contact_number,
      };

      const result = await userService.saveUser(options);

      if (result) {
        const response = {
          message: "User Created Successfully",
          data: null
        };
        res.status(200).json(response);
      } else {
        res.status(401).json({ message: "Failed to create user" });
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      throw new Error(error);
    }
  }
}

module.exports = UserController;