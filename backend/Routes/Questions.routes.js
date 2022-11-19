const QuestionRoutes = require("express").Router();

const QuestionModel = require("../Models/AddQuestion.model");
const Authorization = require("../Middleware/Authorization.middleware");
const UserModel = require("../Models/User.model")
const LinkQuestionsModel = require("../Models/LinkQuestions.model")


// get the login in user
QuestionRoutes.get("/loginuser", async (req, res) => {

    const { userId } = req.body;

    const user = await await UserModel.findById(userId);
    res.send(user)
})


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

QuestionRoutes.post("/:id", Authorization(["admin"]), async (req, res) => {

    try {
        const { limit } = req.body;
        console.log(limit, req.params.id)
        let questions = await QuestionModel.aggregate([{ $sample: { size: Number(limit) } }])

        const LinkQuestions = questions?.filter((r) => delete (r._id)).map((q) => (
            LinkQuestionsModel.insertMany([{ ...q, uuid: req.params.id }])
        ))

        const fullURL = "http://" + req.get('host') + "/" + "que" + "/" + req.params.id;

        res.status(200).send({ "URL": fullURL })

    }
    catch (err) {
        res.status(404).json({ err: "Qutestion Not Found" })
    }
})

QuestionRoutes.get("/:uuid", async (req, res) => {
    const { uuid } = req.params;

    const data = await LinkQuestionsModel.find({ uuid });
    console.log(data.length)

    if (data.length <= 0) {
        res.send({ erroe: true, "msg": "Error 404, This url not Found" })
    }
    else {
        res.send({ Total: data.length, data })
    }
})




module.exports = QuestionRoutes
