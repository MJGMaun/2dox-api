import express from 'express'
const router = express.Router();
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller.mjs';

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;