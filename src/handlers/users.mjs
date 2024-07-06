import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/helpers.mjs";
import { User } from "../models/user.model.mjs";

export const createUserHandler = async (req, res) => {
	const result = validationResult(req);
	if (!result.isEmpty()) return res.status(400).send(result.array());
	const data = matchedData(req);
	data.password = hashPassword(data.password);
	const newUser = new User(data);
	try {
		const savedUser = await newUser.save();
		return res.status(201).send(savedUser);
	} catch (err) {
		return res.sendStatus(400);
	}
};