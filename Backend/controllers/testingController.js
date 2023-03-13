import { Order } from '../models/TestingModel.js';
//create product - By admin Only
export const createOrder = async (req, res, next) => {
  const {
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    orderItems,
  } = req.body;
  const order = await Order.create({
    shippingInfo,
    itemsPrice,
    user: req.user._id,
    taxPrice,
    shippingPrice,
    totalPrice,
    orderItems,
    paymentInfo,
    paidAt: Date.now(),
  });
  res.status(201).json({
    success: true,
    order,
  });
};
