import mongoose from "mongoose";

let Schema = mongoose.Schema;

let bunnySchema = new Schema(
    {
        bunnyName: {
            type: String,
            required: [true, 'Please provide bunny name'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        temperament: {
            type: String,
            trim: true,
        },
       age: {
            type: String,
       },
        variation: {
            type: String,
        },
        imageLink: {
            type: String,
        }
    },
);

let Bunny = mongoose.model("Bunny", bunnySchema);


export default Bunny