const connection = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const addBrands = async (req, res) => {
    const brand = req.body;
    query = "SELECT * FROM brands WHERE brand_name=?";
    connection.query(query, [brand.brand_name], (error, results) => {

        try {
            if (results.length > 0) {
                const existing = results[0];
                if (existing.brand_name === brand.brand_name) {
                    return res.status(400).json({
                        message: "Brand Name is already exists."
                    })
                }
            }
            console.log(brand.brand_name);
            if (results.length <= 0) {
                query = "insert into brands (brand_name, description,created_dt, status) values(?,?,?,?)";

                connection.query(query, [brand.brand_name, brand.description, brand.created_dt, brand.status], (error, results) => {
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
            return res.status(500).json({ message: 'error' });
        }
    })
}

const getAll = async (req, res) => {
    query = "Select * from brands";
    connection.query(query, (error, results) => {
        try {
            return res.status(200).json(results)
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}

const deleteBrand = async (req, res) => {
    const brand = req.body;
    query = "select * from brands where brand_id=?"
    connection.query(query, [brand.brand_id], (error, results) => {
        try {
            const removeBrand = results[0];
            if (results.length === 0) {
                return res.status(404).json({ message: "Brand not found" });
            }
            if (removeBrand.brand_id === brand.brand_id) {
                query = "DELETE FROM brands WHERE brand_id = ?"
                connection.query(query, [brand.brand_id], (error, results) => {
                    try {
                        return res.status(200).json({
                           message: `${removeBrand.brand_id}, ${removeBrand.brand_name} deleted successfully`
                        })
                    } catch (error) {
                        return res.status(500).json(error);
                    }
                })
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    })
}

const updateBrand = async (req, res)=>{
    const brand = req.body;
    // query = "SELECT * FROM brands WHERE brand_id=?"
      query ="UPDATE brands SET brand_name=?, description=?, created_dt=?, status=? WHERE brand_id=?";
    connection.query(query,[brand.brand_name, brand.description, brand.created_dt, brand.status, brand.brand_id],(error,results )=>{
        try {
             
            if (results.affectedRows == 0){
                 console.log("test")
                return res.status(404).json({
                   message: "Brand id does not exist"
                })
            }
           console.log("test1")
            return res.status(200).json({
                message: "Brand updated successfully"
            })
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}
module.exports = { addBrands, getAll, deleteBrand, updateBrand }