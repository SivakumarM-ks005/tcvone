require('dotenv').config();

function checkRole(req, res, next){
    if(res.locals.response = process.env.USER)
        res.sendStatus(401)
    else 
        next()
}

module.exports = { checkRole : checkRole}