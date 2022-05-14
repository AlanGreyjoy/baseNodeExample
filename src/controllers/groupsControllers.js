const {catchAsync} = require("../classes/catchAsync");

/**
 * Get all groups
 * @type {(function(*=, *=, *=): void)|*}
 */
exports.groups = catchAsync(async (req, res) => {
    shResponse200Data(res, {groups: []})
})