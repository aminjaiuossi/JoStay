import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  role: { type: String, enum: ["Tourist", "Company", "Admin"], default: "Tourist" },
  phoneNumber: { type: String, required: false },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
