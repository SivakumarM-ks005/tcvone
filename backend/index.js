const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRoute = require('./router/userRouter');
const app = express();

// call functions

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/user/signup', userRoute);
module.exports= app;