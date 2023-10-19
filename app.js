const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('index', { message: 'LOJA de ADOSAU de ANIMAIS seuvaseis' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: "Adote Aqui!"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});