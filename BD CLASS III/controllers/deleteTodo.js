//Import
const Todo = require("../models/Todo");

//Define route Handler
exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Deleted Successfully",
        });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server error',
        });
    }

}