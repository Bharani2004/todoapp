const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticate = async (req, res, next) =>
    {
        const token = req.headers['authorization']?.split(' ')[1]
        console.log("token" ,token)
        if(token)
            {
                jwt.verify(
                    token, 
                    process.env.AUTH_SECRET,
                    
                    (error, decoded) => 
                        {
                            if(error)
                                {
                                    return res.status(401).send({
                                        isLoggedIn : false,
                                        message: "Failed to authenticate"
                                    })
                               
                                }
                                req.user ={};
                                req.user.id=decoded.id;
                                req.user.username= decoded.username;
                                next();
                        }
                )
            }
            else
            {
                res.status(401).send({message: 'Not Logged in. Signup or Login to access this resource'})
            }
    }

    