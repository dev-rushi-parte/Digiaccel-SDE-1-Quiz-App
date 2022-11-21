
const UserModel = require("../Models/User.model");
const Authorization = (permittedRoles) => {

    return async (req, res, next) => {

        let { email } = req.body

        const user = await UserModel.findOne({ email })

        //permittedRoles - array of string/strings
        if (!user) {
            return res.status(404).send("User not Found")

        }


        //.includes
        let auth = false;
        if (permittedRoles.includes(user.role)) {
            auth = true;
        }

        if (!auth) {
            return res.status(401).send("not authorised")
        }

        next()
    }
}



module.exports = Authorization
