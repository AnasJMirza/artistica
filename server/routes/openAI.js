import express from "express";
import * as dotenv from 'dotenv';
import { generateImage } from "../controllers/openAI.js";

dotenv.config();

const router = express.Router();



router.get('/', (req, res)=> res.send("hello from openAI")); // for checking routes

router.post('/', generateImage);



export default router;