const {nmSuccess} = require("../../../globals");
module.exports = (router) => {

    router.get('/groups', async (req, res) =>{
        console.log('get all groups')

        return nmSuccess(res, {success: true})
    })

    return router
};