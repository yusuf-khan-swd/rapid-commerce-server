import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudentFromDB);
router.get('/:studentId', StudentController.getSingleStudentFromDB);
router.delete('/:studentId', StudentController.deleteSingleStudentFromDB);

export const StudentRoutes = router;
