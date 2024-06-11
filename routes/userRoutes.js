import express from 'express'
import { showLoginForm, handleLogin } from '../controllers/user.controller.js'

const router = express.Router();

router.get("/login", showLoginForm);
router.post("/login", handleLogin);

export default router;