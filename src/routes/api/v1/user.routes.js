const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) =>{
        shResponse200Data(res, {users: []})
    })

router
    .route('/:userId')
    .get((req, res) => {
        shResponse200Data(res, {requestUserId: req.params.userId})
    })

module.exports = router