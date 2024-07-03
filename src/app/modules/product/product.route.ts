import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-student', ProductController.createStudent);
router.get('/', ProductController.getAllStudentFromDB);
router.get('/:studentId', ProductController.getSingleStudentFromDB);
router.delete('/:studentId', ProductController.deleteSingleStudentFromDB);

export const ProductRoutes = router;
