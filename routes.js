const express = require('express'); 
const route = express.Router();
const homeController = require('./src/controllers/homeController')

function midleware(rec,res,next){
    console.log()
    console.log('Passei no seu midleware')
    console.log()
    next()
}

//rotas da home
route.get('/', midleware,homeController.paginaInicial,(req,res,next)=>{
    console.log()
    console.log('ainda estou aqui...')
});
route.post('/', homeController.trataPost);



module.exports = route;