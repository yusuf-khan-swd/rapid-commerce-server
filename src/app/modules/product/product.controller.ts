import { Request, Response } from 'express';
import { ProductService } from './product.service';
import studentValidationSchema from './product.validation';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodParseData = studentValidationSchema.parse(studentData);

    const result = await ProductService.createProduct(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Student Create Success',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something Went Wrong',
      error: error,
    });
  }
};

const getAllStudentFromDB = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Get All Student Success',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something Went Wrong',
      error: error,
    });
  }
};

const getSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await ProductService.getSingleProductFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Get single Student Success',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something Went Wrong',
      error: error,
    });
  }
};

const deleteSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await ProductService.deleteSingleProductFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Delete single Student Success',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something Went Wrong',
      error: error,
    });
  }
};

export const ProductController = {
  createStudent,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
