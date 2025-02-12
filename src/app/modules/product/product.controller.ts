import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { ProductValidation } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParseData =
      ProductValidation.createProductValidationSchema.parse(productData);

    const result = await ProductService.createProduct(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProductFromDB(searchTerm);

    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
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
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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
    const { productId } = req.params;
    await ProductService.deleteSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Something Went Wrong',
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    ProductValidation.updateProductValidationSchema.parse(productData);

    const result = await ProductService.updateProduct(productId, productData);

    res.status(200).json({
      success: true,
      message: 'Update single Product Success',
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
  updateProduct,
  deleteSingleProductFromDB,
};
