const express = require('express')
const validate = require('../../../middleware/validate')
const {usersController} = require("../../../controllers");
const {userValidation} = require('../../../validations')
const router = express.Router()

router
    .route('/')
    .get(usersController.users)
    .post(usersController.createUser, validate(userValidation.create)) //non working route, only for demonstration and validation

router
    .route('/:userId')
    .get(usersController.getUserById)

module.exports = router