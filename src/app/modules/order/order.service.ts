import { TProduct } from './order.interface';
import { Product } from './order.model';

const createProduct = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};

const getAllProductFromDB = async (searchTerm: any) => {
  if (searchTerm) {
    return await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
  }

  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });

  return result;
};

const updateProduct = async (id: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProduct,
  deleteSingleProductFromDB,
};
