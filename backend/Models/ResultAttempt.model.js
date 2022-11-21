const mongoose = require("mongoose");


const ResultSchema = new mongoose.Schema({

    userId: { type: String, require },
    scrore: { type: Array, require },
    attempt: { type: Array, require }
},
    {
        timestamps: true
    })


module.exports = mongoose.model("results", ResultSchema);