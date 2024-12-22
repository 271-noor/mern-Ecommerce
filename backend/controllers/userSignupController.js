const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');



async function userSignUpController(res, req) {
    try {
        const {email, password, name} = req.body

        console.log("req.body",req.body)

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
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = userData.save(res)

        res.status(200).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        });

        
    } catch (err) {
        res.status(500).json({
            message : "error",
            error : true,
            success : false
        });
    }
};

module.exports = userSignUpController