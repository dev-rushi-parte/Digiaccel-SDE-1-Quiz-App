const mongoose = require("mongoose");


const LinkQuestionsSchema = new mongoose.Schema({

    difficulty: { type: Number },
    question: { type: String },
    answer: { type: String },
    multiAnswer: { type: Array },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
    userId: { type: String },
    adminId: { type: String },
    uuid: { type: String }

},
    {
        timestamps: true
    })


module.exports = mongoose.model("linkQuestions", LinkQuestionsSchema);