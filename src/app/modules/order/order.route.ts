import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createProduct);
router.get('/', OrderController.getAllProductFromDB);
router.get('/:productId', OrderController.getSingleProductFromDB);
router.put('/:productId', OrderController.updateProduct);
router.delete('/:productId', OrderController.deleteSingleProductFromDB);

export const OrderRoutes = router;
