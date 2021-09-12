const db = require('./DataBase')


//Model de postagem:
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING,
    },
    Conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Model de Usuarios:
const User = db.sequelize.define('usuarios', {
    Nome: {
        type: db.Sequelize.STRING,
    },
    Sobrenome: {
        type: db.Sequelize.STRING,
    },
    Idade: {
        type: db.Sequelize.INTEGER,
    },
    Email: {
        type: db.Sequelize.STRING
    }
})

// Methodo para Criar as Tabelas.

    //User.sync({force:true})

db.sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Nao foi possivel se conectar: " + erro)

})

module.exports = Post
 