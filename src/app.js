const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const ApiError = require('./classes/ApiError')
const { errorConverter, errorHandler } = require('./middleware/error');
const httpStatus = require('http-status')
const routes = require('./routes/api/v1')

const app = express()

app.use(helmet())

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors())
app.options('*', cors())

app.use('/api/v1', routes)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, `Route: '${req.originalUrl}' Not found`));
});

app.use(errorConverter)
app.use(errorHandler)

module.exports = app