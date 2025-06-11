import mongoose from "mongoose";
import { Webhook } from "svix";  

const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  role: { 
    type: String, 
    enum: ["Tourist", "Company", "Admin"], 
    default: "Tourist" 
  },
  phoneNumber: { type: String, required: false },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

const clerkWebhooks = async (req, res) => {
  try {  
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    console.log("Webhook headers:", headers);
    console.log("Webhook body:", req.body);

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    console.log("Webhook verified ✅ - Type:", type);
    console.log("User data:", userData);

    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      default:
        break;
    }

    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.log("❌ Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
