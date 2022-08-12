import express from "express";
import { getPosts, CreatePosts } from "../controllers/posts.js"

const router = express.Router();


// localhost:5000/posts/......
router.get("/", getPosts)
router.post("/", CreatePosts)

export default router;