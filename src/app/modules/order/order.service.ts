import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (data: TOrder) => {
  const result = await Order.create(data);
  return result;
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
