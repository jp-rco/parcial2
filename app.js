const express = require('express');
const coinRoute = require('./routes/coin'); 
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/coin', coinRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API - Juan Pablo Restrepo');
});


app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/users', (req, res) => {
    let usuario = req.body;
    
    if (!usuario.ciudad) {
      usuario.ciudad = 'Bogotá';
    }
    
    if (!usuario.pais) {
      usuario.pais = 'Colombia';
    }
  
    console.log('Usuario creado:', usuario);
    res.status(201).json(usuario);
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

