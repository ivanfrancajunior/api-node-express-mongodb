exports.paginaInicial = (req,res) =>{
    res.render('index');
}

exports.trataPost = (req,res) =>{
    res.send('Post enviado com sucesso!')
}