const ResultRouter = require("express").Router();

const ResultModel = require("../Models/ResultAttempt.model");

ResultRouter.post("/:id", async (req, res) => {

    try {
        const { id } = req.params
        const { userId, scrore } = req.body

        const checkUser = await ResultModel.findOne({ userId: id });
        console.log(id, "frId")
        console.log(checkUser, "userData")
        console.log(userId, "userId")
        if (checkUser) {
            if (checkUser.userId == userId) {
                console.log(id)
                let att = await checkUser.updateOne({ $push: { attempt: Number((checkUser.attempt[checkUser.attempt.length - 1])) + 1 } });
                let scor = await checkUser.updateOne({ $push: { scrore: scrore } });


                res.status(200).json({ "message": "Data Updated" })
            }
            else {
                res.status(401).send("You are Unauthorized")
            }

        }
        else {
            const AddNewUserResult = new ResultModel({
                userId,
                scrore,
                attempt: 1

            })

            try {
                const saveResult = await AddNewUserResult.save();
                res.status(201).json(saveResult);
            }
            catch (err) {
                res.status(500).json(err)
            }
        }

    }
    catch (err) {
        console.log(err)
    }
})


ResultRouter.get("/", async (req, res) => {
    const { userId } = req.body

    let data = await ResultModel.find({ userId })

    res.status(200).send(data)

})


module.exports = ResultRouter