import { Product } from "../model/productModel.js"

//create product 

export const createProduct = async (req,res,next)=>{
	const product = await Product.create(req.body)
	res.status(201).json({
		success:true,
		product
	})
}
export const getAllProduct=(req,res, next)=>{
	res.status(200).json({message:"Route is working fine"})
}