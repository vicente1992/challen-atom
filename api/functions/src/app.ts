import express from 'express';
import cors from 'cors';
import routerTasks from './routes/tasks.router';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', routerTasks);

app.get('/', (res: express.Response) => {
  return res.status(200).json({ message: 'Online API!!' })
});


export default app;