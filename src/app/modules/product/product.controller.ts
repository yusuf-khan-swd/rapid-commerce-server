import { Request, Response } from 'express';
import { ProductService } from './product.service';
import productValidationSchema from './product.validation';
const createProduct = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodParseData = productValidationSchema.parse(studentData);

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

const getAllProductFromDB = async (req: Request, res: Response) => {
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

const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleProductFromDB(id);

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

const deleteSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteSingleProductFromDB(id);

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
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteSingleProductFromDB,
};
