import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application route
app.use('/api/products', ProductRoutes);

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
