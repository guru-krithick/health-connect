import {User} from '../models/User.model.js';
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookie.js';

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

export const login = async (req,res) => {
    res.send("login route");
}

export const logout = async (req,res) => {
    res.send("logout route");
}