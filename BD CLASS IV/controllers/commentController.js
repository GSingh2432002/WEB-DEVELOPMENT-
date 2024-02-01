//Import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//Business Logic
exports.createComment = async(req,res) => {
    try{
        //fetch data from req body
        const {post,user,body} = req.body;
        //create a comment object
        const comment = new comment({
            post,user,body
        });
        //Save the new comment into the database
        const savedComment = await comment.save();

        //Find the post by ID, add the new comment to its comment  array and save it again
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:savedComment._id} },{new:true})
        .populate("comments") //Populate the comments aray with comment documents
        .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment",
        });
    }
};