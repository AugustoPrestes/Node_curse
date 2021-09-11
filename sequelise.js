

//Model de postagem:
const Postagem = sequelize.define('postagem', {
    Titulo: {
        type: Sequelize.STRING,
    },
    Conteudo: {
        type: Sequelize.TEXT,
    },
})

Postagem.create({
    Titulo: 'Um titulo de exemplo',
    Conteudo: 'Um Conteudo qualquer'
})


//Model de Usuarios:
const Usuario = sequelize.define('usuarios', {
    Nome: {
        type: Sequelize.STRING,
    },
    Sobrenome: {
        type: Sequelize.STRING,
    },
    Idade: {
        type: Sequelize.INTEGER,
    },
    Email: {
        type: Sequelize.STRING,
    }
})

Usuario.create({
    Nome: 'Augusto',
    Sobrenome: 'Prestes da Silva',
    Idade: '21',
    Email: 'fenkzebra147@gmail.com'
})


sequelize.authenticate().then(function(){
    console.log("Conectado com ssuceso")
}).catch(function(erro){
    console.log("Nao foi possivel se conectar")
})