import express from 'express';
import { ProductController } from './order.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProductFromDB);
router.get('/:productId', ProductController.getSingleProductFromDB);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteSingleProductFromDB);

export const ProductRoutes = router;
