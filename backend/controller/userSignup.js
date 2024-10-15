const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const sendOtp = require("./sendOtp");
 

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

      
        const user = await userModel.findOne({ email });
        console.log("user", user);

        if (user) {
            throw new Error("User already exists.");
        }

       
        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");
        if (!name) throw new Error("Please provide name");

       
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something went wrong while hashing the password");
        }

      
        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        };

        
        const userData = new userModel(payload);
        const saveUser = await userData.save();

        
        const otpSent = await sendOtp(email); 

       
        saveUser.otp = otpSent.otp;  
        saveUser.otpExpiry = Date.now() + 10 * 60 * 1000; 
        await saveUser.save();  
       
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully! OTP sent to your email for verification."
        });

    } catch (err) {
     
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;
