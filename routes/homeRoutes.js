import express from 'express';
import { showHomePage } from '../controllers/home.controller.js'
import { isAuthenticated } from '../middleware/auth.middleware.js'

const router = express.Router();

router.get("/", isAuthenticated, showHomePage);

export default router;