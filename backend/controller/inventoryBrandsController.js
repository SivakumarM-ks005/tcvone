const connection = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const addBrands = async(req, res)=>{
    const brand = req.body;
    query = "select * from brands where brand_name=?";
    connection.query(query,[brand.brand_name],(error, results)=>{
        try {
            if(results.length >0){
                const existing = results[0];
                if(existing.brand_name === brand.brand_name ){
                    return res.status(400).json({
                        message: "Brand Name is already exists."
                    })
                }
            }
            if(results.length <=0){
                query = "insert into brands (brand_name, description,status, created_at) values(?,?,1,?)";
               connection.query(query,[brand.brand_name,brand.description,brand.created_at],(error, results)=>{
                 try {
                 return res.status(200).json({
                    message: "Record added successfully"
                 })   
                 } catch (error) {
                    return res.status(500).json(error);
                 }
               })
                }
            
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}

const getAll = async(req, res)=>{
    query = "Select * from brands";
    connection.query(query, (error, results)=>{
        try {
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}
module.exports={addBrands, getAll}