const express = require('express');
const app = express();
const morganLogger = require('morgan');

const productRoutes = require('./API/routes/products');
const orderRoutes = require('./API/routes/orders');

app.use(morganLogger('dev'));

//Routes being used for API URL Requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req,res,next) => {

});

app.use((req,res,next) => {

});
module.exports = app;
