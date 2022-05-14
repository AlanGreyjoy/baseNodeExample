const {catchAsync} = require("../classes/catchAsync");
const httpStatus = require("http-status");

/**
 * Create a new user
 * @type {(function(*=, *=, *=): void)|*}
 */
exports.createUser = catchAsync(async (req, res) => {
    //create your user then return it
    //shResponse200Data(httpStatus.CREATED).send(user)
})

/**
 *  Get all users
 * @type {(function(*=, *=, *=): void)|*}
 */
exports.users = catchAsync(async (req, res) => {
    shResponse200Data(res, {users: []})
})

/**
 * Get user by id
 * @type {(function(*=, *=, *=): void)|*}
 */
exports.getUserById = catchAsync(async (req, res) => {
    shResponse200Data(res, {user: req.params.userId})
})