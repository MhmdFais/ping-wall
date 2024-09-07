const messages = require('../models/messages')

module.exports = {
    get: (req, res) => {
        res.render("new")
    },
    post: (req, res) => {
        //console.log(req.body)
        const newEntry = {
            userName: req.body.userName,
            message: req.body.message,
            added: new Date().toLocaleDateString()
        }
        messages.push(newEntry)
        res.redirect('/')
    }
}