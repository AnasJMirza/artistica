import mongoose from "mongoose";

const User = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
});

const UserSchema = mongoose.model('User', User)

export default UserSchema;