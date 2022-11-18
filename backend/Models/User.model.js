const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

    email: { type: String, require: true, max: 50 },
    password: { type: String, require: true, min: 6 },
    name: { type: String, require },
    role: { type: String, default: "student", enum: ["admin", "student"] }
},
    {
        timestamps: true
    })


module.exports = mongoose.model("users", UserSchema);