const productModel = require("../models/product");

module.exports = {
    createProduct: async( req, res)=>{
        const body = req.body;
        const newProduct = await productModel.create(body);
        return res.status(201).json(newProduct);
    },
    getProducts: async(req, res)=>{
        const category_id = req.query.category_id;
        const body_query = {};
        if (category_id){
            body_query.category_id = category_id;
        }
        const products = await productModel.find(body_query).populate("category_id");
        return res.status(200).json(products);
    },
    updateProduct: async(req, res)=>{
        const id = req.params.id;
        const body = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updateProduct);
    },
    deleteProduct: async(req, res)=>{
        const id = req.params.id;
        const deleteProduct = await productModel.findByIdAndDelete(id);
        return res.status(200).json(deleteProduct);
    }
}