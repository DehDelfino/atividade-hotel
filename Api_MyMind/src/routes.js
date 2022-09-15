
const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer.js')

const authController = require('./controllers/authController')

const routes = express.Router()

//controllers 
const QuartoController = require('./controllers/QuartoController')

const middlewares = require('./middlewares/middlewares')
   
routes.get('/quartos' , QuartoController.index) 
routes.post('/quartos', QuartoController.create)


routes.put('/quartos/:numeroQuarto', QuartoController.update)
routes.delete('/quartos/:numeroQuarto', QuartoController.delete)


module.exports = routes 

