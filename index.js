const express = require('express');
const cors = require('cors');
const app = express();

const products = require('./routes/productRoute');

app.use(express.json());

app.use('/products', products);

app.use(cors());

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));