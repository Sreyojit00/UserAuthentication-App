
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const userModel = require('../models/userModel')


const sendOtp = async (email) => {
    const otp = crypto.randomInt(100000, 999999); 

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sreyojitwork@gmail.com', 
            pass: 'cvww bcdq gfpw zkom', 
        },
    });

    const mailOptions = {
        from: 'sreyojitwork@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };
    
    await transporter.sendMail(mailOptions);
   
    return { otp };
};

module.exports = sendOtp





