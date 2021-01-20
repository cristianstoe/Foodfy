const express = require(`express`)
const routes = express.Router()
const controllers = require(`./controllers`)
const infos = require(`./data`)


routes.get(`/`, controllers.home)

routes.get(`/sobre`, controllers.about)

routes.get(`/receitas`, controllers.recipes)

routes.get("/receitas/:index", controllers.recipeinfo)

// ADM //

routes.get("/admin/recipes", controllers.index); // mostrar lista de receitas

routes.get("/admin/create", controllers.create); // criar receita

routes.get("/admin/:id", controllers.show); // exibir detalhes de uma receita

routes.get("/admin/:id/edit", controllers.edit); // mostrar formulario de edicao

routes.post("/admin/recipes", controllers.post);



// routes.delete("/admin/recipes", controllers.delete);

// routes.put("/admin/recipes", controllers.put);


module.exports = routes