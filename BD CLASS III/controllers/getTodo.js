//Import
const Todo = require("../models/Todo");

//Define route Handler
exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.staus(200)
        .json({
            success: true,
            data:todos,
            message:"entire todo data is fetched",
        });
    }
    catch(err) {
       console.error(err);
       res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'server error',
       });
    }
}

exports.getTodoById = async(req,res) => {
    try{
        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        //data for given id is not found
        if(!todo){
           return res.status(404).json({
            success: false,
            message:"No data found with given id",
           })
    }
    //data for given if found
    res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
    })
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