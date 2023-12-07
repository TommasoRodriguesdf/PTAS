const express = requires('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

 const produtos=[
  {id:1, nome:"Foca fofa" , preco:"grátis so precisa adotar" , descricao:"Esses animais possuem uma camada de gordura que envolve todo o seu corpo, funcionando como um isolante térmico", imagem: "Foca,fofa.jpg"},
  {id:2, nome:"Banda vermelho fofo" , preco:"grátis so precisa adotar" , descricao:"O panda-vermelho é um animal solitário que possui cabeça redonda, focinho curto e orelhas triangulares. Seu pelo marrom tem um aspecto avermelhado", imagem: "Panda,vermelho,fofo.jpg"},
  {id:3, nome:"raposa" , preco:"grátis so precisa adotar" , descricao:"raposa-vermelha é uma das espécies mais conhecidas de raposa.", imagem: "raposa.jpg"},
  {id:4, nome:"raposa-branco" , preco:"grátis so precisa adotar" , descricao:" as raposas-do-ártico contam com uma pelagem branca", imagem: "raposa-branco.jpg"},
  {id:5, nome:"panda" , preco:"grátis so precisa adotar" , descricao:"panda pode sobreviver mais de 30 anos. Pandas podem passar até 14 horas por dia alimentando-se", imagem: "panda.jpg"},
  {id:6, nome:"Foca fofa" , preco:"grátis so precisa adotar" , descricao:" Elas se destacam por levarem o título de maior roedor do mundo", imagem: "capivara.jpg"},
  {id:7, nome:"tigre" , preco:"grátis so precisa adotar" , descricao:"Os tigres são animais carnívoros e os seus dentes caninos são bem desenvolvidos e os maiores entre os felinos", imagem: "tigre.jpg"},
  {id:8, nome:"esquilo fofo" , preco:"grátis so precisa adotar" , descricao:"Sua família comprende os esquilos arborícolas", imagem: "esquilo-fofo.jpg"},
  {id:9, nome:"guepardo" , preco:"grátis so precisa adotar" , descricao:"O guepardo é considerado o animal terrestre mais rápido", imagem: "guepardo.jpg"},
  {id:10, nome:"axolote" , preco:"grátis so precisa adotar" , descricao:"Os únicos animais vertebrados capazes de se regenerar", imagem: "axolote.jpg"},
 ]

 function buscarProdutoPorId(id){
  const produto = produtos.find(produto => produto.id == id );
 return produto || null
 }

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorId(req.params.id)
  res.render('produtos', { produto })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});