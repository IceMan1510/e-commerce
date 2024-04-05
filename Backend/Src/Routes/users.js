const { Router } = require('express');
const UserController = require('../Controller/users');
const { validate } = require('../Validation/validation');
const { loginUserSchema } = require('../Validation/validationSchemas');

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', validate(loginUserSchema) , userController.login);
usersRouter.post('/' , userController.saveUser);

// usersRouter.delete('/', userController.delete);

module.exports = usersRouter;