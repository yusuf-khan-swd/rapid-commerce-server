import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrderFromDB);
router.get('/:orderId', OrderController.getSingleOrderFromDB);
router.put('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteSingleOrderFromDB);

export const OrderRoutes = router;
