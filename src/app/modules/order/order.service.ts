import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (data: TOrder) => {
  console.log(data);
  const { productId, quantity } = data;
  const productData = await Product.findById(productId);

  if (!productData) throw new Error('Order not found');

  const calculateQuantity = productData.inventory.quantity - quantity;
  console.log({ calculateQuantity });

  return productData;
  // const result = await Order.create(data);
  // return result;
};

const getAllOrderFromDB = async (email: any) => {
  if (email) {
    return await Order.find({ email: email });
  }

  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrderFromDB,
};
