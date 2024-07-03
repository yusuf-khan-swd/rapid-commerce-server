import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrderFromDB);
router.get('/:productId', OrderController.getSingleOrderFromDB);
router.put('/:productId', OrderController.updateOrder);
router.delete('/:productId', OrderController.deleteSingleOrderFromDB);

export const OrderRoutes = router;
