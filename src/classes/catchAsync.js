/**
 * Catch async errors
 * @param fn
 * @returns {(function(*=, *=, *=): void)|*}
 */
exports.catchAsync = (fn) => (req, res, next) => {
    Promise.resolve((fn(req, res, next))).catch((error) => next(error))
}