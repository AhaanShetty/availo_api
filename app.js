const express = require('express');
const productsHandler = require('./api/routes/products');
const officialHandler = require('./api/routes/officials');
const app = express();
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/products', productsHandler);
app.use('/officials', officialHandler);

app.use((req, res) => {
  res.status(200).json({
    status: 200,
    message: "you are at the root"
  })
});


module.exports = app;
