import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

//  configure openai for image creation

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openAI = new OpenAIApi(configuration);

// controllers

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body; // get data (prompt) from frontend
        const aiResponse = await openAI.createImage({ // creating image
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json; // storing in variable to send back
        res.status(200).json({photo: image}); // sent back
    } catch (error) {
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
}