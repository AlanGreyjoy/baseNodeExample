const express = require('express')
const {groupsController} = require('../../../controllers')
const router = express.Router()

module.exports.path = '/groups'

router
    .route('/')
    .get(groupsController.groups)

module.exports = router