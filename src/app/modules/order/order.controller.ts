import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { OrderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParseData =
      OrderValidation.createOrderValidationSchema.parse(productData);

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
    const { orderId } = req.params;
    const result = await OrderService.getSingleOrderFromDB(orderId);

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
    const { orderId } = req.params;
    await OrderService.deleteSingleOrderFromDB(orderId);

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
    const { orderId } = req.params;
    const productData = req.body;

    OrderValidation.updateOrderValidationSchema.parse(productData);

    const result = await OrderService.updateOrder(orderId, productData);

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
