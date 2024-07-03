import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProductFromDB);
router.get('/:id', ProductController.getSingleProductFromDB);
router.delete('/:id', ProductController.deleteSingleProductFromDB);

export const ProductRoutes = router;
