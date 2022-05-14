const express = require('express')
const {usersController} = require("../../../controllers");
const router = express.Router()

router
    .route('/')
    .get(usersController.users)
    .post(usersController.createUser) //non working route, only for demonstration

router
    .route('/:userId')
    .get(usersController.getUserById)

module.exports = router