const { body } = require('express-validator');

const addUserSchema = [
    body('username').isLength({ min: 4, max: 16 }).withMessage('Username must be at least 4 and no more than 16 characters'),
    body('email').isEmail().withMessage('Incorrect email')
];

const loginUserSchema = [
    body('username').isLength({ min: 1, max: 16 }).withMessage('Username must be at least 1 and no more than 16 characters'),
    body('password').isLength({ min: 1, max: 16 }).withMessage('Invalid username/password')
];
module.exports = { addUserSchema, loginUserSchema }
