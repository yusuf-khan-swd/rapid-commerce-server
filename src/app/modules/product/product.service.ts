import { TStudent } from './product.interface';
import { Product } from './product.model';

const createProduct = async (studentData: TStudent) => {
  const result = await Product.create(studentData);
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

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
};
