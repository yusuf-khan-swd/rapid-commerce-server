import { TStudent } from './product.interface';
import { Student } from './product.model';

const createProduct = async (studentData: TStudent) => {
  const result = await Student.create(studentData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Student.findById({ _id: id });

  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await Student.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
};
