import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/ProductModel.js';

const productRoute = express.Router();

// get all products
productRoute.get("/", asyncHandler(
    async (req, res) => {
        const products = await Product.find()
        res.json(products);
    }
))

// get single product
productRoute.get("/:id", asyncHandler(
    async (req, res) => {
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        } else {
            res.status(400).json({
                message: "Khong tim thay san pham"
            })
        }
    }
))

export default productRoute