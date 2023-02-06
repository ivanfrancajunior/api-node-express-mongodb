const express = require('express');
const app = express();

app.use(
    express.urlencoded({extended:true})
)

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='name'>
    <button>Enviar</button>
    </form>`)
});
app.get('/teste', (req, res) => {
    
    //params teste/profile/id||profile etc.
    //query  teste/profile/?chave=valor etc
    
    console.log(req.params)
    console.log(req.quety)
    res.send(``)
});

app.post('/', (req, res) => {
    res.send(`O q vc enviou foi ${req.body.name}`)
});

app.listen(3000, () => console.log ('🔥 server up! on port 3000'))
