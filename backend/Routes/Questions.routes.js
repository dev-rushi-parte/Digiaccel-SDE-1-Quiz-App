const QuestionRoutes = require("express").Router();

const QuestionModel = require("../Models/AddQuestion.model");
const Authorization = require("../Middleware/Authorization.middleware");
const UserModel = require("../Models/User.model")
const LinkQuestionsModel = require("../Models/LinkQuestions.model")


// get the login in user
QuestionRoutes.get("/loginuser", async (req, res) => {

    const { userId } = req.body;

    const user = await await UserModel.findById(userId);
    res.status(200).send(user)
})

// Create the Question Route
QuestionRoutes.post("/create_question", Authorization(["admin"]), async (req, res) => {

    const { difficulty, question, answer, multiAnswer, option1, option2, option3, option4, userId } = req.body;

    // Single Answer Question

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
    // Multi Answer Question
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

// get the Random 10 Question 
QuestionRoutes.post("/:id", Authorization(["admin"]), async (req, res) => {

    try {
        // get All question
        let allData = await QuestionModel.find();
        // Shuffle All the Question every time
        let questions = await QuestionModel.aggregate([{ $sample: { size: Number(allData.length) } }])

        // Logic For getting First 10 question which has difficulty level is 1 to 10
        let TenQuestion = [];
        let obj = {}
        for (let i = 0; i < questions.length; i++) {

            if (!obj[questions[i].difficulty]) {
                TenQuestion.push(questions[i]);
                obj[questions[i].difficulty] = true
                if (TenQuestion.length == 10) {
                    break
                }
            }
        }

        // Remove the _id from each object Because Mongodb giving error for same _id
        const LinkQuestions = TenQuestion?.filter((r) => delete (r._id)).map((q) => (

            // Adding those 10 question to seperate Collection with Generated uuid
            { ...q, uuid: req.params.id }
        ))

        await LinkQuestionsModel.insertMany(LinkQuestions)


        // Random URL send to Home page

        const fullURL = "https://quiz-frontend-eight.vercel.app/" + "quiz" + "/" + req.params.id;

        res.status(200).send({ "URL": fullURL })



    }
    catch (err) {
        res.status(404).json({ err: "Qutestion Not Found" })
    }
})

// Get the question from that uuid from LinkQuestions Collection

QuestionRoutes.get("/:uuid", async (req, res) => {

    const { uuid } = req.params;


    const data = await LinkQuestionsModel.find({ uuid })


    if (data.length <= 0) {
        res.status(404).send({ erroe: true, "msg": "Error 404, This url not Found" })
    }
    else {
        res.status(200).send({ Total: data.length, data })
    }
})





module.exports = QuestionRoutes
