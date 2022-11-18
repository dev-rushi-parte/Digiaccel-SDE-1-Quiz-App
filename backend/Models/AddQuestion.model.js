const mongoose = require("mongoose")

const QuestionsSchema = new mongoose.Schema({

    difficulty: { type: Number },
    question: { type: String },
    answer: { type: String },
    multiAnswer: { type: Array, default: undefined },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
    userId: { type: String },
    adminId: { type: String }


}, {
    timestamps: true
})

const questionskModel = mongoose.model("questions", QuestionsSchema)


module.exports = questionskModel