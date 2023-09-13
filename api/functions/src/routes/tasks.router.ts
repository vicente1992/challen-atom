import { Router } from 'express';
import { tasksController } from '../controllers/tacks.controller';
import { createTaskValidator, deleteTaskValidator, updateTaskValidator } from '../validators/task.validator';

const routerTasks = Router();

routerTasks.get('/', tasksController.getAll);

routerTasks.post('/', createTaskValidator, tasksController.create);

routerTasks.put('/:id', updateTaskValidator, tasksController.update);

routerTasks.delete('/:id', deleteTaskValidator, tasksController.delete);

export default routerTasks;