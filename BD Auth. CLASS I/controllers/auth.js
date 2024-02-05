const bcrypt = require("bcrypt");
const User = require("../models/User");

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