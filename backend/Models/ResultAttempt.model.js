const mongoose = require("mongoose");


const ResultSchema = new mongoose.Schema({

    userId: { type: String, require },
    scrore: { type: String, require },
    attempt: { type: String, require }
},
    {
        timestamps: true
    })


module.exports = mongoose.model("results", ResultSchema);