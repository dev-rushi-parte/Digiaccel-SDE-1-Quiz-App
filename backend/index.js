// Imports external
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

// files imports
const AuthRouter = require("./Routes/user.routes");
const userAuthentication = require("./Middleware/Auth.middleware")
const QuestionRoutes = require("./Routes/Questions.routes")

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


app.listen(process.env.PORT, () => {
    console.log("Connected to Port" + " " + process.env.PORT)
})