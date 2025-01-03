const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');



async function userSignUpController(req, res) {
    try {
        const {email, password, name} = req.body

        const user = await userModel.findOne({email})

        if (user) {
            throw new Error("Already user exists!")
        }

        if (!email) {
            throw new Error("Please provide your email")
        }
        if (!password) {
            throw new Error("Please provide your password")
        }
        if (!name) {
            throw new Error("Please provide your name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error('Something is wrong!')   
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save(res)

        res.status(200).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        });

        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message : err.message || err ,
            error : true,
            success : false
        });
    }
};

module.exports = userSignUpController