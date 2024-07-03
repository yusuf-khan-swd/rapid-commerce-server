import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (data: TProduct) => {
  const result = await Product.create(data);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });

  return result;
};

const updateProduct = async (id: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data);
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProduct,
  deleteSingleProductFromDB,
};
