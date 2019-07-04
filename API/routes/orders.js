const express = require('express');
const router = express.Router();

router.get('/', (req,res, next) => {
    res.status(200).json({
        message: 'Order has been fetched'
    });
});

router.post('/', (req,res, next) => {
    res.status(201).json({
        message: 'Order has been made'
    });
});

router.get('/:orderId', (req,res, next) => {
    res.status(201).json({
        message: 'Order details fetched',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req,res, next) => {
    res.status(201).json({
        message: 'Order has been erased',
        orderId: req.params.orderId
    });
});

module.exports = router;