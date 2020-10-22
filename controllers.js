const fs = require(`fs`)
const data = require(`./data`)
const infos = require(`./data`)
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