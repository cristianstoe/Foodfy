const fs = require(`fs`)
const infos = require(`./data`)
const data = require(`./data.json`)
const { Z_DATA_ERROR } = require("zlib")

exports.home = function (req, res) {
    return res.render(`home`, { items: infos })
}

exports.about =  function (req, res) {
    return res.render(`about`, { items: infos })
}

exports.recipes =  function (req, res) {
    return res.render(`recipes`, { items: infos })
}

exports.recipeinfo =  function (req, res) {
    const receitas = [];
    const recipeIndex = req.params.index;
  
    return res.render(`recipeinfo`, {items: infos[recipeIndex]})
  }

  // ADM //

exports.index = function (req, res) {
    return res.send(`Lista de receitas`)
}

exports.create = function (req, res) {
    return res.render(`create`, { items: infos })
}

exports.show = function(req, res){
    const id = req.params.id

    return res.send (`Mostrar receita // O Id fornecido é ${id}`)
}

exports.edit = function (req, res){
    return res.send(`Formulario de edicao`)
}


exports.post = function(req, res){
    return res.send(req.body)

}