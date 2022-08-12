import PostMessage from "../models/posts.js"

//  add all the functions of the routes here

export const getPosts =  async (req, res) => {
try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages);
    res.status(200).json(postMessages);

} catch (error) {
    res.status(404).json({message:error.message})
    
}}

export const CreatePosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save();

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}