const connection = require('../connection');

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
                query = "insert into user ( username, password, email, firstName, lastName, dateRegistered,lastLogin,role,Status ) values (?,?,?,?,?,'2025-11-10', '2025-11-10', 'user','false')";
                connection.query(query, [user.userName, user.password, user.email, user.firstName, user.lastName], (error, results) => {
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

module.exports = { signup }