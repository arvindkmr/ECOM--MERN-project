import { Product } from "../models/productModel.js"
import ApiFeatures from '../utils/apiFeatures.js';
import ErrorHandler from '../utils/errorHandler.js';
//create product - By admin Only
export const createProduct = async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//unhandled promise rejection
//update product for Admin only
export const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler('product not found', 404));
  }
  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ sucess: true, product });
};

//Delete product for Admin only
export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler('product not found', 500));
  }
  await product.remove(id);
  res
    .status(200)
    .json({ sucess: true, message: 'product deleted successfully' });
};
//Get Single product details
export const singleProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler('product not found', 404));
  }

  res.status(200).json({ sucess: true, product });
};

//Get - To display all products to user
export const getAllProduct = async (req, res, next) => {
  let resultPerPage = 1000;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    console.log(Product,"controller")
  const products = await apiFeature.query;
  res.status(200).json({ success: true, products , productsCount});
};
