import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/product/student.route';

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application route
app.use('/api/v1/student', StudentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
