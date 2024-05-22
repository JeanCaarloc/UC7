let { livros, id } = require("../bancoDeDados");



function consultarColecao (req, res) {
    return res.status(200).json(livros);
}


function consultarLivroId(req, res){
    const { id } = req.params;

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    })

    if(isNaN(id)){
        return res.status(404).json({mensagem: "Não existe livro para o ID informado."})
    }

    if(!resultado){
        return res.status(404).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    return res.status(200).json(resultado);
}


function cadastrarLivro (req, res){
    //console.log(req.body);
    const {titulo, autor, ano, numPaginas} = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: "O campo Nome é obrigatório."})
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "O campo E-mail é obrigatório."})
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "O campo Status é obrigatório."})
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo Status é obrigatório."})
    }



    const livro = {
        id: id++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }


    livros.push(livro);

    return res.status(201).json(livro);
}



function alterarLivro (req, res){
    const { id } = req.params;
    const {titulo, autor, ano,numPaginas} = req.body

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    })

    if(!resultado){
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: "O campo Tirulo é obrigatório."})
    }

    if (!autor) {
        return res.status(400).json({ mensagem: "O campo Autor é obrigatório."})
    }

    if (!ano) {
        return res.status(400).json({ mensagem: "O campo Ano é obrigatório."})
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: "O campo Numero De Paginas é obrigatório."})
    }

    resultado.titulo = titulo;
    resultado.autor = autor;
    resultado.ano = ano;
    resultado.numPaginas = numPaginas;

    return res.status(200).json({ mensagem: "Livro substituído."})
}

function atualizarTituloLivro (req, res) {
    const { id } = req.params;
    const { titulo } = req.body;

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    } )

    if(!resultado) {
        return res.status(404).json({ mensagem: 'Livro não localizado.' })
    }

    if(!titulo) {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatório." });
    }

    resultado.titulo = titulo;

    return res.status(200).json({ mensagem: "Livro alterado" });

}

function removerLivro(req, res){
    const { id } = req.params;

    const resultado = livros.find( (livro) => {
        return livro.id === Number(id);
    })

    if(!resultado){
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    })

    return res.status(200).json({ mensagem: "Livro removido."})
}


module.exports = {
    consultarColecao,
    consultarLivroId,
    cadastrarLivro,
    alterarLivro,
    atualizarTituloLivro,
    removerLivro
}