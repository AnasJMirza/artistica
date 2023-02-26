import bcrypt from 'bcrypt';
import User from "../models/user.js";



export const register = async (req, res) => {

    const { userName, email, password, profile } = req.body;

    try {
        
        // if one of these fields are empty, throw an error.
        if(!userName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required! '});
        }

        // check if the userName is already exists in database or not?
        const isUserNameExist = await User.findOne({ userName });
        if(isUserNameExist) {
            return res.status(400).json({ message: 'Sorry, Username already exists!'});
        }

        // check if the email is already exists in database or not?
        const isEmailExist = await User.findOne({ email });
        if(isEmailExist) {
            return res.status(400).json({ message: 'Sorry, Email already exists!'});
        }

        // convert plain password into hashed form
        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword,
            profile: profile || ''
        });

        return res.status(200).json({message: 'Registration Successful!'});


    } catch (error) {
        
    }


}


// export const login = (req, res) => {
//     try {
        
//         const { email, password } = req.body;


//     } catch (error) {
        
//     }
// }