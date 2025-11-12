const express = require('express');
const connection = require('../connection');
const router = express.Router();
const {signup} = require('../controller/userController')

router.post('/signup', signup)

// router.post('/signup',(req,res)=>{
//     let user = req.body;
//     query ="select userName, password, email, status from user where email=?";
//     connection.query(query,[user.email],(error, results)=>{
//         try {
//             if(results.length <=0){
//                 date = new Date();
//                 query ="insert into user ( username, password, email, firstName, lastName, dateRegistered,lastLogin,role,Status ) values (?,?,?,?,?,'2025-11-10', '2025-11-10', 'user','false')";
//                 connection.query(query, [user.userName, user.password, user.email, user.firstName, user.lastName],(err, results)=>{
//                     try {
//                         return res.status(200).json({
//                             message: "Successfully registered"
//                         })
//                     } catch (error) {
//                         return res.status(500).json(error);
//                     }
//                 })
//             }else {
//                 return res.status(400).json({
//                     message : "Email id already exists"
//                 })
//             }
            
//         } catch (error) {
//             return res.status(500).json(err);
//         }
//     })
// })

module.exports = router;