const connection = require('../connection');

const signup = async(req,res )=>{
    try {
        const user = req.body;
        query = "select userName, password, email, status from user where email=?";
        connection.query(query,[user.email], (error, results)=>{
            try {
                if(results.length <= 0){
                      query ="insert into user ( username, password, email, firstName, lastName, dateRegistered,lastLogin,role,Status ) values (?,?,?,?,?,'2025-11-10', '2025-11-10', 'user','false')";
                       connection.query(query, [user.userName, user.password, user.email, user.firstName, user.lastName],(error, results)=>{
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

                }
            } catch (error) {
               return res.status(500).json(error);
            }
        })
        
    } catch (error) {
       return res.status(500).json(error); 
    }
}

module.exports={signup}