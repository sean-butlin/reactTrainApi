const express = require('express');
const router = express.Router();
const products = require('../json/products');

router.get(`/`, function(req, res) {
    res.status(200).json(products)
});

module.exports = router;