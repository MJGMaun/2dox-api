import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true},
		displayName: { type: String },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);