import { NextFunction, Request, Response, } from 'express';
import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidation';

export const createTaskValidator = [
  check('name').exists().notEmpty(),
  check('description').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];

export const updateTaskValidator = [
  check('name').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('completed').exists().isBoolean().notEmpty(),
  check('id')
    .exists()
    .not()
    .isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];
export const deleteTaskValidator = [
  check('id')
    .exists()
    .not()
    .isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];