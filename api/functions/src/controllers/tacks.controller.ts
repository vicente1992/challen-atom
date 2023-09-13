import { Request, Response } from 'express';
import { tasksService } from '../services/tasks.services';
import { matchedData } from 'express-validator';
import { Tasks } from '../interfaces/task';
import { handleHttpError } from '../utils/handleError';

export class TasksController {

  async getAll(req: Request, res: Response) {
    try {
      const data = await tasksService.getAll();
      res.status(200).json(data);
    } catch (error) {
      handleHttpError(res, error)
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body = matchedData(req);
      body.completed = false;
      const task = new Tasks(body)
      const response = await tasksService.create(task);
      res.status(201).json(response);
    } catch (error) {
      handleHttpError(res, error)
    }
  }


  async update(req: Request, res: Response) {
    try {
      const body = matchedData(req);
      const task = new Tasks(body)
      const response = await tasksService.update(task.id, task);
      res.status(200).json(response);
    } catch (error) {
      handleHttpError(res, error)

    }
  }


  async delete(req: Request, res: Response) {
    try {
      const params = matchedData(req);
      const taskId = params.id;
      const response = await tasksService.delete(taskId);
      res.status(200).json(response);
    } catch (error) {
      handleHttpError(res, error)
    }
  }
}

export const tasksController = new TasksController();


