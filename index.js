const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize  = require('sequelize')
var port = 8081 


// Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Conexao com o banco de dados
    const sequelize = new Sequelize('NOME DO BANCO', 'USUARIO', 'SENHA', {
        host: "localhost",
        dialect: "mysql"
    })

//Rotas de site
app.get('/cad', function(req, res){
    res.render('formulario')
})




app.listen(port, function(){
   console.log("Servidor na porta:", port) 
})
 