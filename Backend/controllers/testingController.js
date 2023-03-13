import { Order } from '../models/TestingModel.js';
//create product - By admin Only
export const createOrder = async (req, res, next) => {
  const {
    shippingInfo,
    // orderItems,
    // paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const order = await Order.create({
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
};
