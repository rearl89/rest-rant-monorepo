const db = require("../models")

const { User } = db;

async function defineCurrentUser(req, res, next) {
    try {
        console.log(req.session)
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        req.currentUser = user
        next()
    } catch {
        next()
    }
}

module.exports = defineCurrentUser
