const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

 const produtos=[
  {id:1, nome:"Foca fofa" , preco:"" , descricao:"Esses animais possuem uma camada de gordura que envolve todo o seu corpo, funcionando como um isolante térmico", imagem: "Foca,fofa.jpg"},
  {id:2, nome:"Banda vermelho fofo" , preco:"" , descricao:"O panda-vermelho é um animal solitário que possui cabeça redonda, focinho curto e orelhas triangulares. Seu pelo marrom tem um aspecto avermelhado", imagem: "Panda,vermelho,fofo.jpg"},
  {id:3, nome:"esquilo fofo" , preco:"" , descricao:"Sua família comprende os esquilos arborícolas", imagem: "raposa.jpg"},
  {id:4, nome:"" , preco:"" , descricao:"", imagem: "raposa-branco.jpg"},
  {id:5, nome:"" , preco:"" , descricao:"", imagem: "panda.jpg"},
  {id:6, nome:"Foca fofa" , preco:"" , descricao:"Esses animais possuem uma camada de gordura que envolve todo o seu corpo, funcionando como um isolante térmico", imagem: "capivara.jpg"},
  {id:7, nome:"Banda vermelho fofo" , preco:"" , descricao:"O panda-vermelho é um animal solitário que possui cabeça redonda, focinho curto e orelhas triangulares. Seu pelo marrom tem um aspecto avermelhado", imagem: "tigre.jpg"},
  {id:8, nome:"esquilo fofo" , preco:"" , descricao:"Sua família comprende os esquilos arborícolas", imagem: "esquilo-fofo.jpg"},
  {id:9, nome:"" , preco:"" , descricao:"", imagem: ""},
  {id:10, nome:"" , preco:"" , descricao:"", imagem: "axolote.jpg"},
 ]

 function buscarProdutoPorId(id){
  const produto = produtos.find(produto => produto.id == id );
 return produto || null
 }

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: "Adote Aqui!"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});