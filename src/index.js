require('./globals')

const app = require('./app')
const logger = require('./config/logger')

let server = app.listen(myConfig.port, () => {
    logger.info(`API server started on port ${myConfig.port}`)
})

const unexpectedErrorHandler = (error) => {
    logger.error(error)
    exitHandler()
}

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed')
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
}

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);