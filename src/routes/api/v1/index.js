const express = require('express')
const userRoutes = require('./user.routes')
const groupRoutes = require('./groups.routes')

const router = express.Router()
const basePath = '/api/v1'

const routes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/groups',
        route: groupRoutes
    }
]

for (const route of routes) {
    router.use(`${basePath}${route.path}`, route.route)
}

module.exports = router