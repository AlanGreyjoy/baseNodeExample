const express = require('express')
const {groupsController} = require('../../../controllers')
const router = express.Router()

router
    .route('/')
    .get(groupsController.groups)

module.exports = router