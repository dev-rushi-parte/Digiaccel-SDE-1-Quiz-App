// Imports external
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

// files imports
const AuthRouter = require("./Routes/user.routes");
const userAuthentication = require("./Middleware/Auth.middleware")
const QuestionRoutes = require("./Routes/Questions.routes")
const ResultRouter = require("./Routes/ResultAttempt.routes")


require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());




// Login Singup routes
app.use("/user", AuthRouter)

// login user authentication middleware
app.use(userAuthentication)

// Question Routes
app.use("/que", QuestionRoutes)

// Results Routes

app.use("/result", ResultRouter)


// Mongoose Connection getting URL from Dot env
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    maxPoolSize: 1000

}
try {

    mongoose.connect(process.env.MONGOURL, connectionParams)

    console.log('connected to db')

}
catch (err) {
    console.log('err connection to db ', err)
}

// Listning on Port This also comming form Dot env
app.listen(process.env.PORT, () => {
    console.log("Connected to Port" + " " + process.env.PORT)
})