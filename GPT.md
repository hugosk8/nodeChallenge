routes/index.js:
import express from 'express'
import userRoutes from './userRoutes.js'
import secureRoutes from './secureRoutes.js'

const router = express.Router();

router.use("/user", userRoutes);
router.use("/secure", secureRoutes);

export default router;

routes/userRoutes.js:
import express from 'express'
import { showLoginForm, handleLogin } from '../controllers/user.controller.js'

const router = express.Router();

router.get("/login", showLoginForm);
router.post("/login", handleLogin);

export default router;