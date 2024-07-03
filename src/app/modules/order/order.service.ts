import { TProduct } from './order.interface';
import { Product } from './order.model';

const createOrder = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};

const getAllOrderFromDB = async (searchTerm: any) => {
  if (searchTerm) {
    return await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
  }

  const result = await Product.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });

  return result;
};

const updateOrder = async (id: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteSingleOrderFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  updateOrder,
  deleteSingleOrderFromDB,
};
