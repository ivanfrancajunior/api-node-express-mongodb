require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose')


mongoose.set("strictQuery", true);

mongoose.connect(process.env.CONEXIONSTRING,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> {
    app.emit('pronto')
})
.catch(e => console.log(e))


const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended:true}) )  // exibir os dados das requisições POST

app.use(express.static('./public'))  // exibir os conteudos estáticos

app.use(routes); //Nosso proprio midleware

app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')



app.listen(3000, () => console.log ('🔥 server up! on port 3000'))
