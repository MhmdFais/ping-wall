const indexCon = require('../controllers/indexController')

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
        indexCon.messages.push(newEntry)
        res.redirect('/')
    }
}