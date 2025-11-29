const connection = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const nodemailer = require('nodemailer');

const signup = async (req, res) => {
    const user = req.body;
    query = "select * from user where userName=? OR email=?";
    connection.query(query, [user.userName, user.email], (error, results) => {
        try {
            if (results.length > 0) {
                const existing = results[0];
                if (existing.email === user.email && existing.userName === user.userName) {
                    return res.status(400).json({
                        message: "User Name and Email id already Exists"
                    })
                } else if (existing.email === user.email) {
                    return res.status(400).json({
                        message: "Email id already exists"
                    })
                } else if (existing.userName === user.userName) {
                    return res.status(400).json({
                        message: "User Name id already exists"
                    })
                }
            }
            if (results.length <= 0) {
                query = "insert into user ( username, password, email,contactNumber, firstName, lastName, dateRegistered,lastLogin,role,Status ) values (?,?,?,?,?,?,'2025-11-10', '2025-11-10', 'user','false')";
                connection.query(query, [user.userName, user.password, user.email, user.contactNumber, user.firstName, user.lastName], (error, results) => {
                    try {
                        return res.status(200).json({
                            message: "Successfully registered"
                        })
                    } catch (error) {
                        return res.status(500).json(error);
                    }
                })
            }
            else {
                return res.status(400).json({
                    message: "Email or User Name already exists"
                })
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}

const login = async (req, res) =>{
    const user = req.body;
    query = "select userName,password, role, status from user where userName=?";
    connection.query(query,[user.userName],(error, results)=>{
        try {
            if(results.length <=0 || results[0].password != user.password){
                return res.status(401).json({message: "Incorrect user name or password"});
            }
            else if( results[0].status === 'false'){
                return res.status(401).json({message:"Waiting for admin approval"});
            }
            else if(results[0].password === user.password){
                const response = { userName : results[0].userName, role: results[0].role}
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h'});
                 res.status(200).json({ token : accessToken  });
            }else {
                return res.status(500).json({
                    message:"Something went wrong, please try some time later"
                })
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    })
}

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const forgotPassword = async(req, res)=>{
    try {
        const user = req.body
       query = "select userName, email, password from user where email=?";
       connection.query(query,[user.email], (error, results)=>{
        if(results.length <= 0){
            return res.status(400).json({
                message:"Email is not registered, Please enter registered email id"
            })
        }
        else {
            var mailOptions ={
                from : 'timcablevision@gmail.com',
                to : results[0].email,
                subject: 'Password Reset',
                html:'<p>Your login details Email:</p>'+results[0].email+ '<p>Passord:</p>'+ results[0].password+'<a href="http://local:4200>Click to Login</a>'
            };
            transporter.sendMail(mailOptions, function(erorr, info){
                if(error){
                    console.log(error);
                }else {
                    console.log("Email sent"+ info.response);
                }
            });
             return res.status(200).json({
                message:"Password sent successfull to your email id"
            })
        }
       
       }) 
    } catch (error) {
         return res.status(500).json(error);
    }
}

module.exports = { signup, login, forgotPassword }