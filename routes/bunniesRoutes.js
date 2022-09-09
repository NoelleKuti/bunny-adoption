import express from "express";
import { addBunny, editBunny, deleteBunny, viewBunny } from '../controllers/bunniesController.js'

const router = express.Router();

router.route("/").post(addBunny).get(viewBunny)

router.route('/:id').patch(editBunny).delete(deleteBunny)

export default router