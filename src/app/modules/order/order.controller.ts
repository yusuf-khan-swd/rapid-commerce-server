import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { OrderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData =
      OrderValidation.createOrderValidationSchema.parse(orderData);

    const result = await OrderService.createOrder(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order Create Success',
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
    const { email } = req.query;
    const result = await OrderService.getAllOrderFromDB(email);

    res.status(200).json({
      success: true,
      message: 'All Orders fetched successfully!',
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
      message: 'Order fetched successfully!',
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
      message: 'Order deleted successfully!',
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
    const orderData = req.body;

    OrderValidation.updateOrderValidationSchema.parse(orderData);

    const result = await OrderService.updateOrder(orderId, orderData);

    res.status(200).json({
      success: true,
      message: 'Update single Order Success',
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
