import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" });
export default coursesSchema;

