const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRoute = require('./router/userRouter');
const brandRoute = require('./router/brandsRouter')
const app = express();

// call functions

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
console.log("index");
app.use('/api/user', userRoute);
app.use('/api/brand', brandRoute);
module.exports= app;