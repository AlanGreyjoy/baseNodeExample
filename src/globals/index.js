/**
 * HTTP response 200
 * @param res
 * @returns {*}
 */
global.shResponse200 = (res) => {
    return res.status(200).send()
}

/**
 * HTTP response 200 with data
 * @param res
 * @param data
 * @returns {*}
 */
global.shResponse200Data = (res, data) => {
    return res.status(200).send(data)
}

/**
 * HTTP response 400
 * @param res
 * @param message
 * @returns {*}
 */
global.shResponse400 = (res, message) => {
    return res.status(400).send({message: message})
}

/**
 * HTTP response 401
 * @param res
 * @returns {*}
 */
global.shResponse401 = (res) => {
    return res.status(401).send({message: 'Invalid Token'})
}

/**
 * HTTP response 500
 * @param res
 * @param message
 * @returns {*}
 */
global.shResponse500 = (res, message) => {
    return res.status(500).send({message: message})
}

/**
 * Attaches the local config file
 * Add to .gitnore if you'd like
 * @type {{environment: string, port: number}|{environment?: string, port?: number}}
 */
global.myConfig = require('../config')