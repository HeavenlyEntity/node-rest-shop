const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order has been fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save()
    .then( result => {
        console.log(result);
        res.status(201).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Order details fetched',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Order has been erased',
        orderId: req.params.orderId
    });
});

module.exports = router;