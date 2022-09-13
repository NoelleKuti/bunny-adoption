import express from "express";
import { addBunny, editBunny, deleteBunny, viewBunnies } from '../controllers/bunniesController.js'

const router = express.Router();

router.route("/").post(addBunny).get(viewBunnies)

router.route('/:id').patch(editBunny).delete(deleteBunny)

export default router