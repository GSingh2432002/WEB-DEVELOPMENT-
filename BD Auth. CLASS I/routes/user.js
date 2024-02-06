const express = require("express");
const router = express.Router();

const User = require("../models/User");

const {login,signup} = require("../controllers/auth");
const {Auth,isStudent,isAdmin} = require("../middlewares/Auth");

router.post("/login",login);
router.post("/signup",signup);

//testing protected routes for single middleware
router.get("/test",Auth,(req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

//Protected Route
router.get("/student",Auth,isStudent,(req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Student',
    });
});

router.get("/admin", Auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

router.get("/getEmail",Auth,async (req,res)=> {
    try{
        const id = req.user.id;
        const user = await User.findById(id);

        res.status(200).json({
            success:true,
            user:user,
            message:'welcome to the email route',
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:'fat gya code',
        });
    }
});

module.exports = router;