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

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById({ _id: id });

  return result;
};

const updateOrder = async (id: string, data: TOrder) => {
  const result = await Order.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteSingleOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  updateOrder,
  deleteSingleOrderFromDB,
};
