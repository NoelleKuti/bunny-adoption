
import Bunny from "../models/Bunny.js";

const addBunny = async (req, res) => {
    await Bunny.create(req.body);
    await res.send('bunny successfully added')
}

const editBunny = async (req, res) => {
    const editedBunny = await Bunny.findOneAndUpdate({ _id : req.params.id }, req.body)
    res.send(editedBunny);
}

const deleteBunny = async (req, res) => {
    const deletedBunny = await Bunny.findByIdAndRemove({_id: req.params.id});
    res.send(deletedBunny);
}

const viewBunnies = async (req, res) => {
    const bunnies = await Bunny.find({});
    res.send(bunnies);
}

export { addBunny, editBunny, deleteBunny, viewBunnies }