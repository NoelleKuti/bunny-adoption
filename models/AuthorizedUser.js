import mongoose from "mongoose";

let Schema = mongoose.Schema;

let authorizedUserSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, 'Please provide user name'],
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            trim: true,
        },
    },
    {collection: 'authorizedUsers'}
);

let AuthorizedUser = mongoose.model("AuthorizedUser", authorizedUserSchema);


export default AuthorizedUser