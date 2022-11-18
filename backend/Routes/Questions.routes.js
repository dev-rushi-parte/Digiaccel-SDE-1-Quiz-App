const QuestionRoutes = require("express").Router();

const QuestionModel = require("../Models/AddQuestion.model");
const Authorization = require("../Middleware/Authorization.middleware");




QuestionRoutes.post("/create_question", Authorization(["admin"]), async (req, res) => {

    const { difficulty, question, answer, multiAnswer, option1, option2, option3, option4, userId } = req.body;


    if (multiAnswer === undefined) {

        const AddNewQue = new QuestionModel({
            difficulty,
            question,
            answer,
            option1,
            option2,
            option3,
            option4,
            adminId: userId
        })

        try {
            const saveQuestion = await AddNewQue.save();
            res.status(201).json(saveQuestion);
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else if (multiAnswer !== undefined) {
        const AddNewQue = new QuestionModel({
            difficulty,
            question,
            multiAnswer,
            option1,
            option2,
            option3,
            option4,
            adminId: userId
        })

        try {
            const saveQuestion = await AddNewQue.save();
            res.status(201).json(saveQuestion);
        }
        catch (err) {
            res.status(500).json(err)
        }
    }

})

QuestionRoutes.get("/", async (req, res) => {


    try {
        let questions = await QuestionModel.aggregate([{ $sample: { size: 10 } }])

        res.status(200).send({ "Total": questions })

    }
    catch (err) {
        res.status(404).json({ err: "Qutestion Not Found" })
    }
})
module.exports = QuestionRoutes
