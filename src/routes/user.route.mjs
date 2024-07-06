import express from 'express'
const router = express.Router();
import {
	query,
	checkSchema,
	matchedData,
} from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.mjs';
import { createUserHandler } from "../handlers/users.mjs";

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', checkSchema(createUserValidationSchema), createUserHandler);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;