import Application from "../models/Application.js";

const submitApplication = async (req, res) => {
    await Bunny.create(req.body);
    await res.send('Application Successfully Submitted');
}

const viewApplications = async (req, res) => {
    const applications = await Application.find({});
    res.send(applications);
}

const deleteApplication = async (req, res) => {
    const deletedApplication = await Application.findByIdAndRemove({_id: req.params.id});
    res.send(deletedApplication);
}

export {submitApplication, viewApplications, deleteApplication}

