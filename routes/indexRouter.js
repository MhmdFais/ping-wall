const express = require('express')
const controller = require ('../controllers/indexController')

const indexRouter = express.Router()

console.log(controller);  

indexRouter.get("/", controller.control.get)

module.exports = indexRouter 