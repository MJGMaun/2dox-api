import express from 'express'
import passport from "passport";

const router = express.Router();
import { authUser, getStatus, logoutUser } from '../controllers/auth.controller.mjs';

router.post('/', passport.authenticate("local"), authUser);
router.get('/status', getStatus);
router.post('/logout', logoutUser);
// router.put('/auth/discord', authDiscord);

export default router;