import express from "express";
import * as dotenv from 'dotenv';


import { createPost, getAllPosts } from "../controllers/post.js";


dotenv.config();



const router = express.Router();


// Create post
router.post('/', createPost)


// Get all posts
router.get('/', getAllPosts)


// get searched/specific posts



export default router;