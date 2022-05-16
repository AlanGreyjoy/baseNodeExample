/*
* User model
* You can do whatever you want. If you're using MongoDB, you can use the mongoose ORM npm, or you can roll your own.
* If you use the mongoose npm, create your models using the mongoose schema.
* If you're rolling your own, create your model as a model.exports = class ModleName with a constructor(props)
* MongoDB is so friendly, rolling your own is just as easy as using the mongoose npm.
*
* If you're using sequelize, stop and start using MongoDB.
* This isn't 2005 anymore. Stop using RDM based SQL databases.
*
* */

const httpStatus = require('http-status')
const ApiError = require('../classes/ApiError')

/**
 * Create a new user
 * @param params
 * @returns {Promise<void>}
 */
exports.createUser = async (params) => {
    //create your user
    //Make use of Nodes built in error handler with Throw new ApiError
}