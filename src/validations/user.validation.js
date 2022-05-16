const Joi = require('joi')

module.exports.create = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
}