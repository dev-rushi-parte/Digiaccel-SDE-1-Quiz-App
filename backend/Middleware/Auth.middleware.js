const jwt = require('jsonwebtoken');
require('dotenv').config()

const userAuthentication = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send("You are not authorise")
    }

    const user_token = req.headers.authorization.split(" ")[1];

    jwt.verify(user_token, process.env.KEY, (err, decoded) => {
        if (err) {
            return res.status(400).send("please login again err")
        }

        // passing userId and email in body of all the login user
        req.body.email = decoded.email;
        req.body.userId = decoded.userId
        next();
    })

}

module.exports = userAuthentication;

