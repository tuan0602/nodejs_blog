

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hdb = require('express-handlebars');

const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hdb', hdb.engine({extname: '.hdb'}));
app.set('view engine', 'hdb');
app.set('views', path.join(__dirname, 'resource\\views'));
// console.log('PATH: ',path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})