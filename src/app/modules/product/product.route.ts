import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/', ProductController.getAllProductFromDB);
router.get('/:studentId', ProductController.getSingleProductFromDB);
router.delete('/:studentId', ProductController.deleteSingleProductFromDB);

export const ProductRoutes = router;
