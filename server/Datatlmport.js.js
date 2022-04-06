import express from "express";
import User from './models/UserModel.js'
import Product from './models/ProductModel.js'
import users from './data/users.js'
import products from './data/Products.js'
import asyncHandler from 'express-async-handler'

const ImportData = express.Router();

ImportData.post("/user", asyncHandler(
    async (req, res) => {
        await User.remove({})
        const importUser = await User.insertMany(users);
        res.send({ importUser })
    }
))

ImportData.post("/products", asyncHandler(
    async (req, res) => {
        await Product.remove({}) //model
        const importProducts = await Product.insertMany(products); //data
        res.send({ importProducts })
    }
))

export default ImportData