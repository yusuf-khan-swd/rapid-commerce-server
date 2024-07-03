import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudent = async (studentData: TStudent) => {
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

const getAllStudentFromDB = async () => {
  const result = await Student.find({ isDeleted: false });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });

  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  createStudent,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
