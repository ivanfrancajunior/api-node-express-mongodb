const express = require('express');
const routes = require('./routes')
const app = express();

/* app.use(
    express.urlencoded({extended:true}) // exibir os dados das requisições POST
) */

app.use(routes);



app.listen(3000, () => console.log ('🔥 server up! on port 3000'))
