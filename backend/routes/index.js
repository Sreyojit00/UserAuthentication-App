const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userLogin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUser = require('../controller/allUser')
const { resetPassword } = require('../controller/resetPassword')
const {verifyOtp} = require("../controller/verifyOtp")

const sendOtp = require('../controller/sendOtp')




router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get('/user-logout',userLogout)
router.get("/all-user",authToken,allUser)
router.post("/reset-password",resetPassword)
router.post("/sendOtp",sendOtp)
router.post("/verifyOtp", verifyOtp)




module.exports = router