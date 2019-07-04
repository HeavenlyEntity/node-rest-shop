const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to /products'
    })
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
      res.status(200).json({
          message: 'This is a special ID',
          id: id
      });
  } else {
      res.status(200).json({
          message: 'Passing an ID here'  
      }); 
  }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;