const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

 const produto=[
  {id:1, nome:"Foga fofa" , preco:"" , descricao:"", imagem: "foga.png"},
  {id:2, nome:"Banda vermelho fofo" , preco:"" , descricao:"", imagem: "banda.png"},
  {id:3, nome:"esquilo fofo" , preco:"" , descricao:"", imagem: "esquilo.png"},
  {id:4, nome:"" , preco:"" , descricao:"", imagem: ""},
  {id:5, nome:"" , preco:"" , descricao:"", imagem: ""},
  {id:6, nome:"Foga fofa" , preco:"" , descricao:"", imagem: "foga.png"},
  {id:7, nome:"Banda vermelho fofo" , preco:"" , descricao:"", imagem: "banda.png"},
  {id:8, nome:"esquilo fofo" , preco:"" , descricao:"", imagem: "esquilo.png"},
  {id:9, nome:"" , preco:"" , descricao:"", imagem: ""},
  {id:10, nome:"" , preco:"" , descricao:"", imagem: ""},
 ]


app.get('/', (req, res) => {
  res.render('index', { message: '' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: "Adote Aqui!"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});