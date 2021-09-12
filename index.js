const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser') 
var port = 8081
const Post = require('./models/Post') 


// Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas de site
app.get('/', function(req, res){
    res.render('home')
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    Post.create({
        conteudo: req.body.conteudo,
        titulo: req.body.titulo
        
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Ocorreu um erro: " + erro)
    })
})



app.listen(port, function(){
   console.log("Servidor rodando na porta:", port) 
})
  