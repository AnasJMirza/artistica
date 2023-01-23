import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true); // for searching functionality, it is helpful
    
    mongoose.connect(url)
    .then(console.log('Connected to DB'));
}

export default connectDB;