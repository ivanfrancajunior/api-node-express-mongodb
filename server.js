const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='name'>
    <button>Enviar</button>
    </form>`)
});

app.post('/', (req, res) => {
    res.send(' Formulário enviado!')
});

app.listen(3000, () => console.log ('🔥 server up! on port 3000'))
