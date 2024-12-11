import {User} from '../models/User.model.js';
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail, sendWelcomeEmail , sendPasswordResetEmail , sendPasswordResetSuccessEmail} from '../mailer/emails.js';
import crypto from "crypto";

export const signup = async (req,res) => {
   const {email, password, name} = req.body; 
    try {
        if(!email || !password || !name) {
            throw new Error("All fields are required");
        }

        const userAreadyExists = await User.findOne({email})
        console.log("userAlreadyExists", userAreadyExists);
        if(userAreadyExists) {
            return res.status(400).json({success: false, message: "User already exists"});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random()*90000).toString(); 
        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now()+24*60*60*1000

        })

        await user.save();

        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            success:true,
            message:"User Created Sucessfully",
            user :{
                ...user._doc,
                password: null,
            },
        })

   } catch (error) {
        res.status(400).json({success: false, message: error.message});
   }
}

export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired token" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: null,
            },
        });
    } catch (error) {
        console.error(error); // Log the error to understand what's happening
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        
        // If user is not found, return early with a response
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        
        // If password is invalid, return early with a response
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Generate token and set cookie, assuming this is a separate function
        generateTokenAndSetCookie(res, user._id);

        // Update last login time
        user.lastLogin = new Date(); // Use `new Date()` instead of `new Date.now()`

        await user.save(); // Save the user document with updated lastLogin

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: null, // Don't send the password in the response
            },
        });

    } catch (error) {
        console.log("Error in login", error);
        return res.status(500).json({ success: false, message: error.message }); // Send server error
    }
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({email});

        if(!user)
        {
            return res.status(400).json({success: false, message: "User not found"});
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1*60*60*1000;

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.status(200).json({success: true, message: "Password reset link sent to your email"});

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
};

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        const user= await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now() },
        });

        if(!user) {
            return res.status(400).json({success: false, message: "Invalid or expired token"});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();

        await sendPasswordResetSuccessEmail(user.email);

        res.status(200).json({success: true, message: "Password reset successfully"});

    } catch (error) {
        console.error("Error in Reset Password ",error);
        res.status(500).json({ success: false, message: "An error occurred while resetting the password" });
    }
}

export const logout = async (req,res) => {
    //res.send("logout route");
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out successfully"});
}