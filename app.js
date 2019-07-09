const express = require('express');
const app = express();
const morganLogger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./API/routes/products');
const orderRoutes = require('./API/routes/orders');

// mongoose.connect(
//     'mongodb+srv://admin:' + 
//         process.env.MONGO_ATLAS_PW +
//         '@node-rest-shop-e4yqp.mongodb.net/test?retryWrites=true&w=majority',   
//      {
//         useMongoClient: true
//      }
//     );

mongoose.connect(
    'mongodb+srv://admin:nodeAdmin@node-rest-shop-e4yqp.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
 );

app.use(morganLogger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



//Routes being used for API URL Requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


module.exports = app;