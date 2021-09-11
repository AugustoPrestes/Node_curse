const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser') 
var port = 8081 


// Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas de site
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
})


app.listen(port, function(){
   console.log("Servidor na porta:", port) 
})
 