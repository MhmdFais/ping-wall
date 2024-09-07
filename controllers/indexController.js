const messages = require('../models/messages')

const control = {
    get: (req, res) => {
        res.render("index", {messages: messages})
    }
}

module.exports = {
    control
}

