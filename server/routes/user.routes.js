const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('invalid rmail'),
    body('fullname.firstname').isLength({min:3}).withMessage('the first name atleast 3 character long'),
    body('password').isLength({min:6}).withMessage('the password must be atleast 6 character long'),
    

], userController.registerUser)




module.exports = router 