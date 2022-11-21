const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require('bcryptjs');


const AuthRouter = require("express").Router();
const UserModel = require("../Models/User.model")
const { checkAllFields, checkLoginFields } = require("../Middleware/AuthFields")

// singup / Register Student Route
AuthRouter.post("/singup", checkAllFields, async (req, res) => {

    const { email, name, password } = req.body
    // This is checking User is already present in Collection or not

    const checkUserEmail = await UserModel.findOne({ email }).exec();
    const checkName = await UserModel.findOne({ name }).exec();

    if (checkUserEmail) {

        res.status(403).send({ "message": "User already exists" })
    }
    else if (checkName) {

        res.status(403).send({ "message": "User already exists" })
    }


    else {
        try {
            // hashing the password with bcrypt
            await bcrypt.genSalt(6, async function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) {
                        res.status(503).send("please try again")
                    }
                    const user = new UserModel({
                        email,
                        name,
                        password: hash
                    })

                    await user.save();
                    res.status(201).send("Singup is successfull")
                });
            });
        }
        catch (err) {

            res.status(500).send(err)
        }
    }

})

// Singup for Admin Route
AuthRouter.post("/admin", checkAllFields, async (req, res) => {

    const { email, name, password } = req.body
    // This is checking User is already present in Collection or not

    const checkUserEmail = await UserModel.findOne({ email }).exec();
    const checkName = await UserModel.findOne({ name }).exec();

    if (checkUserEmail) {

        res.status(403).send({ "message": "User already exists" })
    }
    else if (checkName) {

        res.status(403).send({ "message": "User already exists" })
    }


    else {
        try {
            await bcrypt.genSalt(6, async function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) {
                        res.status(503).send("please try again")
                    }
                    const user = new UserModel({
                        email,
                        name,
                        password: hash,
                        role: "admin"
                    })

                    await user.save();
                    res.status(201).send("Singup is successfull")
                });
            });
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err)
        }
    }

})

// Login Route for both student as well as admin
AuthRouter.post("/login", checkLoginFields, async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        console.log("user  " + user)
        if (user == null) {
            return res.status(401).send({ "message": "Invalid user Credentials " })

        }

        // Sending userid ans email in token
        const hash = user.password;
        const userId = user._id;

        bcrypt.compare(password, hash, (err, result) => {
            if (result) {
                var token = jwt.sign({ email, userId }, process.env.KEY);
                return res.status(201).send({ "message": "login successfull", "token": token, user })
            }
            else {
                return res.status(401).send({ "message": "Invalid user Credentials " })
            }
        })

    }
    catch (err) {
        res.status(500).send("Invalid credentials" + err)
    }
})

module.exports = AuthRouter