import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);