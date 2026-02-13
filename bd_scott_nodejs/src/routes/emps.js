import express from 'express';
import {empController} from "../emps/controller.js";

const empRouter = express.Router();

empRouter.get('/', empController.findAll);
empRouter.get('/:id', empController.findOneById);
empRouter.post('/', empController.create);

export default empRouter;