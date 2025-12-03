const express = require('express');
const connection = require('../connection');
const router = express.Router();
const auth = require('../services/authendication');
const checkRole = require ('../services/checkRole');

const {signup, login, forgotPassword, getUser, updateUser, getCheckToken, changePassword} = require('../controller/userController')
;
router.post('/signup',signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.get('/get',auth.authendicateToken, checkRole.checkRole, getUser);
router.patch('/update', auth.authendicateToken, checkRole.checkRole, updateUser);
router.post('/changePassword', auth.authendicateToken,  changePassword);
router.get('/getCheckToken',auth.authendicateToken, getCheckToken );

// router.post('/signup',(req,res)=>{
//     console.log("test")
//     let user = req.body;
//     query ="select * from user where email=?";
//     connection.query(query,[user.email],(err, results)=>{
//        try{
//           if(results.length <=0){               
//                 date = new Date();
//                  console.log("length",date)
//                 query ="insert into user ( username, password, email, firstName, lastName, dateRegistered,lastLogin,role,Status ) values (?,?,?,?,?,'2025-11-10', '2025-11-10', 'user','false')";
//                 connection.query(query, [user.userName, user.password, user.email, user.firstName, user.lastName],(error, results)=>{
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
//        }
//        catch{
//         return res.status(500).json(err);
//        }
//     })
// })

module.exports = router;