const httpStatus = require('http-status')
//require your user model. Make sure you implement a class with constructor
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