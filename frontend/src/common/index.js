
const backendDomin = "https://userauthentication-app-wnje.onrender.com"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/user-Logout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get'
    },
     resetPassword: {
        url : `${backendDomin}/api/reset-password`,
        method : 'get'
    },
    sendOtp: {
        url : `${backendDomin}/api/sendOtp`,
        method : "post"
    },
    verifyOtp: {
        url : `${backendDomin}/api/verifyOtp`,
        method : "post"
    },

}


export default SummaryApi
