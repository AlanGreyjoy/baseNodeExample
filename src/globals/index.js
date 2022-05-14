global.shResponse200 = (res) => {
    return res.status(200).send()
}

global.shResponse200Data = (res, data) => {
    return res.status(200).send(data)
}

global.shResponse400 = (res, message) => {
    return res.status(400).send({message: message})
}

global.shResponse401 = (res) => {
    return res.status(401).send({message: 'Invalid Token'})
}

global.shResponse500 = (res, message) => {
    return res.status(500).send({message: message})
}

global.myConfig = require('../config')