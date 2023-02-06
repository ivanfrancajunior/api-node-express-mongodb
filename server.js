const express = require('express');
const routes = require('./routes')
const app = express();
const path = require('path')



app.use(express.urlencoded({extended:true}) )  // exibir os dados das requisições POST
app.use(express.static('./public'))  // exibir os conteudos estáticos

app.use(routes);
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')



app.listen(3000, () => console.log ('🔥 server up! on port 3000'))
