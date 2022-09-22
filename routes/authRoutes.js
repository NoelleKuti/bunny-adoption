import express from 'express'
import { loginUser, getKey } from '../controllers/authController.js'

const router = express.Router();

router.route("/login").post(loginUser);

router.route("/check").get(getKey);



export default router