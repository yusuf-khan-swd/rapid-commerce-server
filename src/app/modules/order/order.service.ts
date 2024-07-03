import { TProduct } from './order.interface';
import { Order } from './order.model';

const createOrder = async (data: TProduct) => {
  const result = await Order.create(data);
  return result;
};

const getAllOrderFromDB = async (searchTerm: any) => {
  if (searchTerm) {
    return await Order.find({ name: { $regex: searchTerm, $options: 'i' } });
  }

  const result = await Order.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById({ _id: id });

  return result;
};

const updateOrder = async (id: string, data: TProduct) => {
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
