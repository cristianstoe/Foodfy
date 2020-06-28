const express = require(`express`)
const nunjucks = require(`nunjucks`)
const server = express()
const infos = require(`./data`)


server.use(express.static(`public`))

server.set(`view engine`, `njk`)

nunjucks.configure(`views`, {
    express: server,
    noCache: true
})

server.get(`/`, function (req, res) {
    return res.render(`home`, { items: infos })
})

server.get(`/sobre`, function (req, res) {
    return res.render(`about`, { items: infos })
})
server.get(`/receitas`, function (req, res) {
    return res.render(`recipes`, { items: infos })
})


server.get("/receitas/:index", function (req, res) {
    const receitas = [];
    const recipeIndex = req.params.index;
  
    return res.render(`recipeinfo`, {items: infos[recipeIndex]})
  })

//   let text_info = infos.information.split("\n").join("<br />") 




server.listen(1597, function () {
    console.log(`server is running`)
})
