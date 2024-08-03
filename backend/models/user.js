import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

export const userModel = mongoose.model(userSchema)