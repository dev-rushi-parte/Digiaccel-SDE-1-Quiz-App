const ResultRouter = require("express").Router();

const ResultModel = require("../Models/ResultAttempt.model");

// ResultRouter.post("/", async (res, res) => {

//     try {
//         const { userId, result, attempt } = req.body

//         const checkUser = await ResultModel.find(userId);

//         if (checkUser.userId == userId) {
//             await ResultModel.updateOne({ $push: { attempt: attempt } });

//             res.status(200).json("user has been followed")
//         }

//     }
//     catch (err) {
//         console.log(err)
//     }
// })


module.exports = ResultRouter