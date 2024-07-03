import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProductFromDB);
router.get('/:productId', ProductController.getSingleProductFromDB);
router.patch('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteSingleProductFromDB);

export const ProductRoutes = router;
