import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongoDB/connection.js';

import postRoutes from './routes/post.js';
import openAIRoutes from './routes/openAI.js'


dotenv.config();


const app = express();

// middlewares

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/open-ai', openAIRoutes);

// server route
app.get('/', (req, res) => res.send('Hello from Artistica!'));

const port = 8080 || process.env.PORT;

const startServer = () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, async () => console.log(`Server started on port http://localhost:${port}`));
    } catch (error) {
        console.log('startServer function at index.js', error);
    }
}

startServer();