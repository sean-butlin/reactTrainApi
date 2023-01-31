const express = require('express');
const cors = require('cors');
const app = express();

const products = require('./json/products');

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json(products);
})

app.use(cors({
    origin: false,
    methods: ['GET']
}));

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

module.exports = app;