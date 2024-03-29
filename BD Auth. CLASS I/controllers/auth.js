const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {options} = require("../routes/user");
require("dotenv").config();

//Signup route handler
exports.signup = async(req,res) => {
    try{
        //get data
        const{name,email,password,role} = req.body;
        //check if user already exist
        const exitingUser = await User.findOne({email});

        if(exitingUser) {
            return res.status(400).json({
                success:false,
                message:'Email is already in use',
            });
        }

        //Secure Password
        let hashedPassword;
        try{
            hashedPassword = await  bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success: false,
                message:'Error in Hashing Password',
            });
        }
        //create entry for user
        const user = await User.create({
            name, email, password:hashedPassword, role
        })
        return res.status(200).json({
            success:true,
            message:'User created successfully',
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be created at this time',
        });
    }
}

//Login
exports.login = async (req,res) => {
    try{
        //data fetch
        const {email,password} = req.body;
        //validation on email and password
        if(!email || ! password) {
            return res.statuc(400).json({
                success:false,
                message:'Please fill all the details Carefully',
            });
        }

        //check for registered user
        let user = await User.findOne({email});
        //if not a registered user
        if(!user){
            return res.status(401).json({
                success: false,
                message:'User is not registered',
            });
        }
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        };

        //verify password and generate a JWT token
        if(await bcrypt.compare(password,user.password)) {
            //password match
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h",
                });
            
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date(Date.now() + 300000 ),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in Successfully',
            });
            // res.status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:'User Logged in Successfully',
            // });
        }
        else{
            //password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:'login failure',
        });
    }
}
