import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../models/post.js';

dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
});


export const createPost = async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);


        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({});
        res.status(200).json({ success: true, data: allPosts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}