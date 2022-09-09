import mongoose from "mongoose";

let Schema = mongoose.Schema;

let bunnySchema = new Schema(
    {
        catName: {
            type: String,
            required: [true, 'Please provide cat name'],
            trim: true,
        },
        temperament: {
            type: String,
            required: [true, 'Please describe cat for potential adopters.'],
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