import mongoose from "mongoose";
//set the schema for the user
const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);