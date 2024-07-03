import cors from 'cors';
import express from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application route
app.use('/api/v1/student', StudentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
