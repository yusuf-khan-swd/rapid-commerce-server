import { TStudent } from './product.interface';
import { Student } from './product.model';

const createProduct = async (studentData: TStudent) => {
  const isUserExist = await Student.isUserExist(studentData?.id);

  if (isUserExist) {
    throw new Error('User already exists!');
  }

  const result = await Student.create(studentData);
  return result;

  // * Here is call of the custom instance method
  // const student = new Student(studentData);
  // const isUserExist = await student.isUserExist(studentData?.id);
  // if (isUserExist) {
  //   throw new Error('User already exists!');
  // }
  // const result = await student.save();
  // return result;
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
