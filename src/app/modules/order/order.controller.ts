import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { OrderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParseData =
      OrderValidation.createProductValidationSchema.parse(productData);

    const result = await OrderService.createOrder(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product Create Success',
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

const getAllOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await OrderService.getAllOrderFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: 'All Products fetched successfully!',
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

const getSingleOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await OrderService.getSingleOrderFromDB(productId);

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

const deleteSingleOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await OrderService.deleteSingleOrderFromDB(productId);

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

const updateOrder = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    OrderValidation.updateProductValidationSchema.parse(productData);

    const result = await OrderService.updateOrder(productId, productData);

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

export const OrderController = {
  createOrder,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  updateOrder,
  deleteSingleOrderFromDB,
};
