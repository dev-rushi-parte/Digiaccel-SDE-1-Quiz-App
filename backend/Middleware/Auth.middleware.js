const jwt = require('jsonwebtoken');
require('dotenv').config()

const userAuthentication = (req, res, next) => {
    // console.log(req.headers.authorization)
    if (!req.headers.authorization) {
        res.send("You are not authorise")
    }

    const user_token = req.headers.authorization.split(" ")[1];

    jwt.verify(user_token, process.env.KEY, (err, decoded) => {
        if (err) {
            return res.send("please login again err")
        }
        console.log("AUth" + " " + decoded.email)
        req.body.email = decoded.email;
        req.body.userId = decoded.userId
        next();
    })

}

module.exports = userAuthentication;

