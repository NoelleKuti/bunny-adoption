import express from "express";
import { submitApplication, viewApplications, deleteApplication } from '../controllers/applicationsController'

const router = express.Router();

router.route("/").post(submitApplication).get(viewApplications)

router.route('/:id').delete(deleteApplication);

export default router