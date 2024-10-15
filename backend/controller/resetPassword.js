
const User = require('../models/userModel'); 
const bcrypt = require('bcryptjs'); 


const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
       
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

       
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(newPassword, salt);

       
        user.password = hashPassword;
        await user.save();

        return res.status(200).json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = { resetPassword };
