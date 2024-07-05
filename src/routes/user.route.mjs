import express from 'express'
const router = express.Router();
import {
	query,
	checkSchema,
	matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.mjs';

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', checkSchema(createUserValidationSchema), createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;