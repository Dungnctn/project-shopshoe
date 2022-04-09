import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

const productRoute = express.Router();

// LOGIN
productRoute.post("/login", asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await User.findOne({email}).exec();
        if(user && (await user.matchPassword(password)) ){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null,
                createAt: user.createAt,
            })
        } else {

        }
    }
))



export default productRoute