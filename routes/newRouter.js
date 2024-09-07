const express = require('express')
const controller = require('../controllers/newController')


const newRouter = express.Router()

newRouter.get('/', controller.get)

newRouter.post('/', controller.post)

module.exports = newRouter