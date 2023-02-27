import { Product } from '../model/productModel.js';

//create product - By admin Only
export const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//update product for Admin only
export const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product) {
    res.status(500).json({
      success: 'false',
      message: 'product not found',
    });
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
    res.status(500).json({
      success: 'false',
      message: 'product not found',
    });
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
    res.status(500).json({
      success: 'false',
      message: 'product not found',
    });
  }

  res
    .status(200)
    .json({ sucess: true, product });
};

//To display all products to user
export const getAllProduct = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};
