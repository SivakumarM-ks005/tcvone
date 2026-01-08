const express = require('express');
const connection = require('../connection');
const router = express.Router();
const auth = require('../services/authendication');
const checkRole = require('../services/checkRole');

const { addBrands, getAll }= require('../controller/inventoryBrandsController');

router.post('/add', addBrands);
router.get('/get', getAll)

module.exports= router;