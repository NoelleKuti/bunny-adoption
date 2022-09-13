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
    },
);

    //catSchema.set('collection', 'code-challenge')
let Bunny = mongoose.model("Bunny", bunnySchema);

Bunny.schema.pre("findOneAndUpdate", function (next) { this.updateAt = new Date(); next(); })

export default Bunny