const Joi = require('joi');

module.exports.login = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};