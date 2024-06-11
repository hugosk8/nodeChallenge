import express from 'express'
import userRoutes from './userRoutes.js'
import homeRoutes from './homeRoutes.js'

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect('/user/login');
});

router.use("/user", userRoutes);
router.use("/home", homeRoutes);

export default router;