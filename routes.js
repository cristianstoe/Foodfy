const express = require(`express`)
const routes = express.Router()
const controllers = require(`./controllers`)
const infos = require(`./data`)




routes.get(`/`, controllers.home)

routes.get(`/sobre`, controllers.about)

routes.get(`/receitas`, controllers.recipes)

routes.get("/receitas/:index", controllers.recipeinfo)

module.exports = routes