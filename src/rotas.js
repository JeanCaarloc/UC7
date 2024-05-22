const express = require('express');
const {consultarColecao, consultarLivroId, cadastrarLivro, alterarLivro, removerLivro, atualizarTituloLivro } = require('./controladores/instrutores.js');

const rotas = express();

rotas.get('/livros', consultarColecao); //rota para listar todos instrutores
rotas.get('/livros/:id', consultarLivroId); // rota para listar um instrutor atraves de um id
rotas.post('/livros', cadastrarLivro); // rota para cadastrar/adicionar instrutores
rotas.put('/livros/:id', alterarLivro); // rota que vai chamar um instrutor cadastrado
rotas.patch('/livros/:id', atualizarTituloLivro); // rota para alterar um status
rotas.delete('/livros/:id', removerLivro); // rota para deletar instrutor


module.exports = rotas;